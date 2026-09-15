"use client";

import * as React from "react";

import {
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnOrderState,
  type ColumnPinningState,
  type ColumnSizingState,
  type OnChangeFn,
  type PaginationState,
  type Row,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useRouter } from "next/navigation";
import { Inbox, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import { computeColumnSummaryText } from "./column-summary";

import {
  DENSITY_ROW_CLASS,
  type DataTableViewState,
  type TableDensity,
} from "./data-table-types";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];

  isLoading?: boolean;
  isFetching?: boolean;

  searchableFields?: (keyof TData)[];
  filterPlaceholder?: string;

  enableSorting?: boolean;
  enableColumnFilters?: boolean;
  enableResizing?: boolean;
  enablePinning?: boolean;
  enableExport?: boolean;

  enableSummaryRow?: boolean;

  manualPagination?: boolean;
  manualSorting?: boolean;
  manualFiltering?: boolean;

  pageCount?: number;
  totalRows?: number;

  pagination?: PaginationState;
  onPaginationChange?: OnChangeFn<PaginationState>;

  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;

  getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string;

  persistKey?: string;

  defaultDensity?: TableDensity;

  pageSizeOptions?: number[];

  emptyMessage?: string;

  exportFilename?: string;
  exportTitle?: string;

  onRowClick?: (row: TData) => void;
  onRowDoubleClick?: (row: TData) => void;
  onRowRightClick?: (row: TData) => void;

  bulkActions?: (
    selectedRows: TData[],
    clearSelection: () => void,
  ) => React.ReactNode;

  refresh?: () => void;

  className?: string;
  tableClassName?: string;
}

/**
 * ============================================================
 * STORAGE
 * ============================================================
 */

const getStorageKey = (persistKey?: string): string | undefined => {
  if (!persistKey) {
    return undefined;
  }

  return `data-table:${persistKey}`;
};

function readPersistedState(
  storageKey?: string,
): Partial<DataTableViewState> | null {
  if (!storageKey) {
    return null;
  }

  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(storageKey);

    if (!raw) {
      return null;
    }

    const parsed: unknown = JSON.parse(raw);

    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    return parsed as Partial<DataTableViewState>;
  } catch {
    return null;
  }
}

/**
 * ============================================================
 * PAGE SIZE
 * ============================================================
 */

function resolvePersistedPageSize(
  value: unknown,
  options: number[],
): number | null {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  if (!options.includes(value)) {
    return null;
  }

  return value;
}

/**
 * ============================================================
 * DATA TABLE
 * ============================================================
 */

export function DataTable<TData, TValue>({
  columns,
  data,

  isLoading = false,
  isFetching = false,

  searchableFields,
  filterPlaceholder = "Tìm kiếm...",

  enableSorting = true,
  enableColumnFilters = true,
  enableResizing = true,
  enablePinning = true,
  enableExport = true,

  enableSummaryRow,

  manualPagination = false,
  manualSorting = false,
  manualFiltering = false,

  pageCount,
  totalRows,

  pagination: controlledPagination,
  onPaginationChange,

  sorting: controlledSorting,
  onSortingChange,

  getRowId,

  persistKey,

  defaultDensity = "comfortable",

  pageSizeOptions = [10, 20, 25, 30, 40, 50, 100],

  emptyMessage = "Không có dữ liệu.",

  exportFilename = "export.csv",
  exportTitle = "Danh sách dữ liệu",

  onRowClick,
  onRowDoubleClick,
  onRowRightClick,

  bulkActions,

  refresh,

  className,
  tableClassName,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();

  const storageKey = React.useMemo(
    () => getStorageKey(persistKey),
    [persistKey],
  );

  /**
   * ==========================================================
   * LOCAL STATE
   * ==========================================================
   */

  const [sorting, setSorting] = React.useState<SortingState>(
    controlledSorting ?? [],
  );

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>(
    {},
  );

  const [columnSizing, setColumnSizing] = React.useState<ColumnSizingState>({});

  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>([]);

  const [rowSelection, setRowSelection] = React.useState({});

  const [globalFilter, setGlobalFilter] = React.useState("");

  const [density, setDensity] = React.useState<TableDensity>(defaultDensity);

  const [refreshing, setRefreshing] = React.useState(false);

  /**
   * ==========================================================
   * INTERNAL PAGINATION
   * ==========================================================
   *
   * Nếu parent controlled:
   *     pagination từ parent.
   *
   * Nếu không:
   *     DataTable tự quản lý.
   *
   * Không đọc localStorage ở initializer.
   * Hydration được xử lý riêng bên dưới.
   */

  const [internalPagination, setInternalPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: pageSizeOptions[0] ?? 10,
    });

  const pagination = controlledPagination ?? internalPagination;

  /**
   * ==========================================================
   * PERSISTENCE STATE
   * ==========================================================
   */

  const [persistHydrated, setPersistHydrated] = React.useState(!storageKey);

  /**
   * storage key nào đã hydrate.
   *
   * Một storage key chỉ hydrate đúng 1 lần.
   */
  const hydratedStorageKeyRef = React.useRef<string | null>(null);

  /**
   * Persisted pageSize cần chờ parent nhận.
   */
  const hydratedPageSizeRef = React.useRef<number | null>(null);

  /**
   * ==========================================================
   * USER PAGE SIZE CHANGE
   * ==========================================================
   *
   * Đây là phần FIX quan trọng.
   *
   * Nếu user click:
   *
   * 20 -> 50
   *
   * thì hydration không được phép:
   *
   * 50 -> 20
   *
   * sau đó.
   */

  const userChangedPageSizeRef = React.useRef(false);

  /**
   * ==========================================================
   * PAGINATION HANDLER
   * ==========================================================
   *
   * Không truyền trực tiếp:
   *
   * onPaginationChange ??
   * setInternalPagination
   *
   * vì cần biết user vừa thay pageSize.
   */

  const handlePaginationChange = React.useCallback<OnChangeFn<PaginationState>>(
    (updater) => {
      const currentPagination = controlledPagination ?? internalPagination;

      const nextPagination =
        typeof updater === "function" ? updater(currentPagination) : updater;
      
      /**
       * User thực sự thay pageSize.
       */
      if (nextPagination.pageSize !== currentPagination.pageSize) {
        userChangedPageSizeRef.current = true;
      }

      /**
       * Controlled.
       */
      if (controlledPagination && onPaginationChange) {
        onPaginationChange(nextPagination);

        return;
      }

      /**
       * Uncontrolled.
       */
      setInternalPagination(nextPagination);
    },
    [controlledPagination, internalPagination, onPaginationChange],
  );

  /**
   * ==========================================================
   * RESET HYDRATION WHEN STORAGE KEY CHANGES
   * ==========================================================
   */

  React.useEffect(() => {
    hydratedStorageKeyRef.current = null;

    hydratedPageSizeRef.current = null;

    userChangedPageSizeRef.current = false;

    setPersistHydrated(!storageKey);
  }, [storageKey]);

  /**
   * ==========================================================
   * HYDRATE LOCAL STORAGE
   * ==========================================================
   *
   * CHỈ CHẠY 1 LẦN / STORAGE KEY.
   *
   * Không phụ thuộc:
   * - pagination
   * - controlledPagination.pageSize
   *
   * vì nếu phụ thuộc chúng thì mỗi lần user click
   * pageSize effect có thể chạy lại.
   */

  React.useEffect(() => {
    if (!storageKey) {
      setPersistHydrated(true);
      return;
    }

    if (hydratedStorageKeyRef.current === storageKey) {
      return;
    }

    hydratedStorageKeyRef.current = storageKey;

    const persisted = readPersistedState(storageKey);

    /**
     * ========================================================
     * KHÔNG CÓ STORAGE
     * ========================================================
     *
     * Ví dụ FuelType:
     *
     * parent pageSize = 20
     *
     * localStorage chưa có.
     *
     * => GIỮ 20.
     *
     * Không lấy pageSizeOptions[0].
     */

    if (!persisted) {
      hydratedPageSizeRef.current = null;

      setPersistHydrated(true);

      return;
    }

    /**
     * ========================================================
     * RESTORE VIEW
     * ========================================================
     */

    if (persisted.columnVisibility) {
      setColumnVisibility(persisted.columnVisibility);
    }

    if (persisted.columnPinning) {
      setColumnPinning(persisted.columnPinning);
    }

    if (persisted.columnSizing) {
      setColumnSizing(persisted.columnSizing);
    }

    if (persisted.columnOrder) {
      setColumnOrder(persisted.columnOrder);
    }

    if (persisted.density) {
      setDensity(persisted.density);
    }

    /**
     * ========================================================
     * RESTORE PAGE SIZE
     * ========================================================
     */

    const persistedPageSize = resolvePersistedPageSize(
      persisted.pageSize,
      pageSizeOptions,
    );

    /**
     * Không có pageSize hợp lệ.
     *
     * Không được tự ý đổi pageSize.
     */
    if (persistedPageSize === null) {
      hydratedPageSizeRef.current = null;

      setPersistHydrated(true);

      return;
    }

    hydratedPageSizeRef.current = persistedPageSize;

    /**
     * ========================================================
     * USER ĐÃ CLICK TRƯỚC HYDRATION
     * ========================================================
     *
     * Ví dụ:
     *
     * localStorage = 20
     * current = 20
     *
     * user click 50
     *
     * => tuyệt đối không restore 20.
     */

    if (userChangedPageSizeRef.current) {
      setPersistHydrated(true);

      return;
    }

    /**
     * ========================================================
     * ĐÃ ĐÚNG PAGE SIZE
     * ========================================================
     */

    const currentPageSize =
      controlledPagination?.pageSize ?? internalPagination.pageSize;

    if (currentPageSize === persistedPageSize) {
      setPersistHydrated(true);

      return;
    }

    /**
     * ========================================================
     * CONTROLLED
     * ========================================================
     */

    if (controlledPagination && onPaginationChange) {
      onPaginationChange({
        ...controlledPagination,
        pageIndex: 0,
        pageSize: persistedPageSize,
      });

      return;
    }

    /**
     * ========================================================
     * INTERNAL
     * ========================================================
     */

    setInternalPagination((current) => ({
      ...current,
      pageIndex: 0,
      pageSize: persistedPageSize,
    }));

    setPersistHydrated(true);
  }, [storageKey, pageSizeOptions]);

  /**
   * ==========================================================
   * WAIT FOR CONTROLLED PARENT
   * ==========================================================
   */

  React.useEffect(() => {
    if (!storageKey) {
      return;
    }

    if (persistHydrated) {
      return;
    }

    /**
     * User đã click.
     *
     * Không cần đợi persisted state nữa.
     */
    if (userChangedPageSizeRef.current) {
      setPersistHydrated(true);
      return;
    }

    const expectedPageSize = hydratedPageSizeRef.current;

    if (expectedPageSize === null) {
      setPersistHydrated(true);
      return;
    }

    if (controlledPagination?.pageSize === expectedPageSize) {
      setPersistHydrated(true);
    }
  }, [storageKey, controlledPagination?.pageSize, persistHydrated]);

  /**
   * ==========================================================
   * PERSIST
   * ==========================================================
   *
   * Chỉ ghi sau khi hydration hoàn tất.
   */

  React.useEffect(() => {
    if (!storageKey) {
      return;
    }

    if (!persistHydrated) {
      return;
    }

    const state: DataTableViewState = {
      pageSize: pagination.pageSize,

      density,

      columnVisibility,

      columnPinning,

      columnSizing,

      columnOrder,
    };

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // Ignore localStorage errors.
    }
  }, [
    storageKey,
    persistHydrated,
    pagination.pageSize,
    density,
    columnVisibility,
    columnPinning,
    columnSizing,
    columnOrder,
  ]);

  /**
   * ==========================================================
   * CLICK TIMEOUT
   * ==========================================================
   */

  const clickTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);

        clickTimeout.current = null;
      }
    };
  }, []);

  /**
   * ==========================================================
   * REFRESH
   * ==========================================================
   */

  const handleRefresh = React.useCallback(() => {
    setRefreshing(true);

    if (refresh) {
      refresh();
    } else {
      router.refresh();
    }

    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, [refresh, router]);

  /**
   * ==========================================================
   * RESET VIEW
   * ==========================================================
   */

  const handleResetView = React.useCallback(() => {
    setSorting([]);

    setColumnFilters([]);

    setColumnVisibility({});

    setColumnPinning({});

    setColumnSizing({});

    setColumnOrder([]);

    setGlobalFilter("");

    setDensity(defaultDensity);

    const defaultPageSize = pageSizeOptions[0] ?? 10;

    const nextPagination: PaginationState = {
      pageIndex: 0,
      pageSize: defaultPageSize,
    };

    /**
     * Reset user-change flag.
     *
     * Sau reset, DataTable có thể persist
     * pageSize mặc định.
     */
    userChangedPageSizeRef.current = true;

    if (controlledPagination && onPaginationChange) {
      onPaginationChange(nextPagination);
    } else {
      setInternalPagination(nextPagination);
    }
  }, [
    defaultDensity,
    pageSizeOptions,
    controlledPagination,
    onPaginationChange,
  ]);

  /**
   * ==========================================================
   * GLOBAL FILTER
   * ==========================================================
   */

  const globalFilterFn = React.useCallback(
    (
      row: {
        original: unknown;
      },
      _id: string,
      value: string,
    ) => {
      const keyword = String(value).trim().toLowerCase();

      if (!keyword) {
        return true;
      }

      const original = row.original as Record<string, unknown>;

      const keys = searchableFields?.length
        ? searchableFields.map(String)
        : Object.keys(original);

      return keys.some((key) => {
        const field = original[key];

        if (field === null || field === undefined) {
          return false;
        }

        if (Array.isArray(field)) {
          return field.join(" ").toLowerCase().includes(keyword);
        }

        if (typeof field === "object") {
          return JSON.stringify(field).toLowerCase().includes(keyword);
        }

        return String(field).toLowerCase().includes(keyword);
      });
    },
    [searchableFields],
  );

  /**
   * ==========================================================
   * TABLE
   * ==========================================================
   */

  const table = useReactTable({
    data,
    columns,

    enableSorting,
    enableColumnFilters,
    enableColumnResizing: enableResizing,
    enableColumnPinning: enablePinning,

    columnResizeMode: "onChange",

    manualPagination,
    manualSorting,
    manualFiltering,

    pageCount: manualPagination ? (pageCount ?? -1) : undefined,

    globalFilterFn,

    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel: getSortedRowModel(),

    getFilteredRowModel: getFilteredRowModel(),

    getPaginationRowModel: getPaginationRowModel(),

    onSortingChange: onSortingChange ?? setSorting,

    onColumnFiltersChange: setColumnFilters,

    onColumnVisibilityChange: setColumnVisibility,

    onColumnPinningChange: setColumnPinning,

    onColumnSizingChange: setColumnSizing,

    onColumnOrderChange: setColumnOrder,

    onRowSelectionChange: setRowSelection,

    onGlobalFilterChange: setGlobalFilter,

    /**
     * QUAN TRỌNG:
     *
     * Dùng handler mới.
     */
    onPaginationChange: handlePaginationChange,

    getRowId,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      columnPinning,
      columnSizing,
      columnOrder,
      rowSelection,
      globalFilter,
      pagination,
    },
  });

  /**
   * ==========================================================
   * INTERACTIVE TARGET
   * ==========================================================
   */

  const isInteractiveTarget = (event: React.SyntheticEvent): boolean => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return false;
    }

    return target.closest("[data-table-interactive]") !== null;
  };

  /**
   * ==========================================================
   * ACTIVE VIEW
   * ==========================================================
   */

  const hasActiveViewChanges =
    sorting.length > 0 ||
    columnFilters.length > 0 ||
    globalFilter !== "" ||
    Object.keys(columnVisibility).length > 0 ||
    Object.keys(columnPinning).length > 0 ||
    Object.keys(columnSizing).length > 0 ||
    columnOrder.length > 0 ||
    density !== defaultDensity ||
    pagination.pageSize !== (pageSizeOptions[0] ?? 10);

  /**
   * ==========================================================
   * SELECTION
   * ==========================================================
   */

  const selectedRows = table.getFilteredSelectedRowModel().rows;

  /**
   * ==========================================================
   * SUMMARY
   * ==========================================================
   */

  const summaryColumns = table
    .getVisibleLeafColumns()
    .filter((column) => column.columnDef.meta?.summary);

  const showSummaryRow =
    (enableSummaryRow ?? summaryColumns.length > 0) &&
    summaryColumns.length > 0;

  const summaryRows = showSummaryRow
    ? table.getFilteredRowModel().rows.map((row) => row.original)
    : [];

  /**
   * ==========================================================
   * ROW CLICK
   * ==========================================================
   */

  const handleRowClick = React.useCallback(
    (row: TData) => {
      onRowClick?.(row);
    },
    [onRowClick],
  );

  /**
   * ==========================================================
   * EXPORT
   * ==========================================================
   */

  const handleExport = React.useCallback(() => {
    if (!enableExport) {
      return;
    }

    const rows = table.getFilteredRowModel().rows;

    if (!rows.length) {
      return;
    }

    const visibleColumns = table
      .getVisibleLeafColumns()
      .filter((column) => column.id !== "select" && column.id !== "actions");

    const headers = visibleColumns.map((column) => column.id);

    const csvRows = rows.map((row) =>
      visibleColumns.map((column) => {
        const value = row.getValue(column.id);

        if (value === null || value === undefined) {
          return "";
        }

        const stringValue = String(value);

        if (
          stringValue.includes(",") ||
          stringValue.includes('"') ||
          stringValue.includes("\n")
        ) {
          return `"${stringValue.replaceAll('"', '""')}"`;
        }

        return stringValue;
      }),
    );

    const csv = [
      headers.join(","),
      ...csvRows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = exportFilename;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }, [enableExport, exportFilename, table]);

  /**
   * ==========================================================
   * RENDER
   * ==========================================================
   */

  return (
    <div className={cn("w-full space-y-4", className)}>
      <DataTableToolbar
        table={table}
        columns={columns}
        globalFilter={globalFilter}
        onGlobalFilterChange={setGlobalFilter}
        filterPlaceholder={filterPlaceholder}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        onResetView={handleResetView}
        hasActiveViewChanges={hasActiveViewChanges}
        enableExport={enableExport}
        exportFilename={exportFilename}
        exportTitle={exportTitle}
        density={density}
        onDensityChange={setDensity}
        persistKey={persistKey}
      />

      {/* ====================================================== */}
      {/* BULK ACTIONS */}
      {/* ====================================================== */}

      {selectedRows.length > 0 && (
        <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-3 py-2">
          <p className="text-sm font-medium">
            {selectedRows.length} dòng được chọn
          </p>

          <div className="flex items-center gap-2">
            {bulkActions?.(
              selectedRows.map((row) => row.original),
              () => setRowSelection({}),
            )}

            <Button
              variant="ghost"
              size="sm"
              data-table-interactive
              onClick={(event) => {
                event.stopPropagation();
                setRowSelection({});
              }}
            >
              <X className="mr-1 h-3.5 w-3.5" />
              Bỏ chọn
            </Button>
          </div>
        </div>
      )}

      {/* ====================================================== */}
      {/* TABLE */}
      {/* ====================================================== */}

      <div className="relative overflow-hidden rounded-lg border">
        {isFetching && !isLoading && (
          <div className="bg-background/60 absolute inset-0 z-20 flex items-start justify-center pt-6 backdrop-blur-[1px]">
            <div className="bg-background flex items-center gap-2 rounded-md border px-3 py-2 text-sm shadow-sm">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Loading...
            </div>
          </div>
        )}

        <div className="w-full overflow-auto">
          <Table className={cn("min-w-max", tableClassName)}>
            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <TableHeader className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-transparent">
                  {headerGroup.headers.map((header) => {
                    const pinned = header.column.getIsPinned();

                    const canResize =
                      enableResizing && header.column.getCanResize();

                    const isResizing = header.column.getIsResizing();

                    const canSort = enableSorting && header.column.getCanSort();

                    const sorted = header.column.getIsSorted();

                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{
                          width: header.getSize(),

                          position: pinned ? "sticky" : "relative",

                          left:
                            pinned === "left"
                              ? header.column.getStart("left")
                              : undefined,

                          right:
                            pinned === "right"
                              ? header.column.getAfter("right")
                              : undefined,

                          zIndex: pinned ? 2 : 0,
                        }}
                        className={cn(
                          "relative",

                          pinned && "bg-background shadow-sm",
                        )}
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            className={cn(
                              "flex items-center gap-1",

                              canSort && "cursor-pointer select-none",
                            )}
                            onClick={
                              canSort
                                ? header.column.getToggleSortingHandler()
                                : undefined
                            }
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}

                            {canSort && sorted === "asc" && (
                              <span className="text-xs">↑</span>
                            )}

                            {canSort && sorted === "desc" && (
                              <span className="text-xs">↓</span>
                            )}
                          </div>
                        )}

                        {canResize && (
                          <div
                            data-table-interactive
                            onDoubleClick={() => header.column.resetSize()}
                            onMouseDown={(event) => {
                              event.stopPropagation();

                              header.getResizeHandler()(event);
                            }}
                            onTouchStart={(event) => {
                              event.stopPropagation();

                              header.getResizeHandler()(event);
                            }}
                            className={cn(
                              "absolute right-0 top-0 h-full w-1 cursor-col-resize touch-none select-none",
                              "hover:bg-primary/50",
                              isResizing && "bg-primary",
                            )}
                          />
                        )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>

            {/* ================================================= */}
            {/* BODY */}
            {/* ================================================= */}

            <TableBody>
              {isLoading ? (
                Array.from({
                  length: 8,
                }).map((_, index) => (
                  <TableRow key={`skeleton-${index}`}>
                    {table.getVisibleLeafColumns().map((column) => (
                      <TableCell key={column.id}>
                        <Skeleton className="h-5 w-full" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    tabIndex={onRowClick ? 0 : undefined}
                    className={cn(
                      "transition-colors",
                      onRowClick && "cursor-pointer",
                      "focus-visible:outline-none",
                      "focus-visible:ring-2",
                      "focus-visible:ring-ring",
                      "focus-visible:ring-inset",
                    )}
                    onClick={(event) => {
                      if (isInteractiveTarget(event)) {
                        event.stopPropagation();

                        if (clickTimeout.current) {
                          clearTimeout(clickTimeout.current);

                          clickTimeout.current = null;
                        }

                        return;
                      }

                      if (event.detail === 2) {
                        return;
                      }

                      if (clickTimeout.current) {
                        clearTimeout(clickTimeout.current);
                      }

                      clickTimeout.current = setTimeout(() => {
                        handleRowClick(row.original);

                        clickTimeout.current = null;
                      }, 250);
                    }}
                    onDoubleClick={(event) => {
                      if (isInteractiveTarget(event)) {
                        event.stopPropagation();

                        if (clickTimeout.current) {
                          clearTimeout(clickTimeout.current);

                          clickTimeout.current = null;
                        }

                        return;
                      }

                      event.stopPropagation();

                      if (clickTimeout.current) {
                        clearTimeout(clickTimeout.current);

                        clickTimeout.current = null;
                      }

                      onRowDoubleClick?.(row.original);
                    }}
                    onContextMenu={(event) => {
                      if (isInteractiveTarget(event)) {
                        event.stopPropagation();
                        return;
                      }

                      event.preventDefault();

                      onRowRightClick?.(row.original);
                    }}
                    onKeyDown={(event) => {
                      if (isInteractiveTarget(event)) {
                        return;
                      }

                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();

                        handleRowClick(row.original);
                      }
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      const pinned = cell.column.getIsPinned();

                      return (
                        <TableCell
                          key={cell.id}
                          style={{
                            width: cell.column.getSize(),
                            position: pinned ? "sticky" : undefined,
                            left:
                              pinned === "left"
                                ? cell.column.getStart("left")
                                : undefined,
                            right:
                              pinned === "right"
                                ? cell.column.getAfter("right")
                                : undefined,
                            zIndex: pinned ? 1 : 0,
                          }}
                          className={cn(
                            DENSITY_ROW_CLASS[density],
                            pinned && "bg-background",
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-40 text-center"
                  >
                    <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                      <Inbox className="h-8 w-8" />

                      <p className="text-sm">{emptyMessage}</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>

            {/* ================================================= */}
            {/* SUMMARY */}
            {/* ================================================= */}

            {showSummaryRow && (
              <tfoot>
                <TableRow className="sticky bottom-0 z-10 border-t-2 bg-muted/70 font-medium hover:bg-muted/70">
                  {table.getVisibleLeafColumns().map((column) => {
                    const pinned = column.getIsPinned();

                    const text = computeColumnSummaryText(summaryRows, column);

                    const align = column.columnDef.meta?.align ?? "left";

                    return (
                      <TableCell
                        key={column.id}
                        style={{
                          width: column.getSize(),

                          position: pinned ? "sticky" : undefined,

                          left:
                            pinned === "left"
                              ? column.getStart("left")
                              : undefined,

                          right:
                            pinned === "right"
                              ? column.getAfter("right")
                              : undefined,

                          zIndex: pinned ? 2 : 1,
                        }}
                        className={cn(
                          pinned && "bg-muted/70",

                          align === "right" && "text-right",

                          align === "center" && "text-center",
                        )}
                      >
                        {text || null}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </tfoot>
            )}
          </Table>
        </div>
      </div>

      {/* ====================================================== */}
      {/* PAGINATION */}
      {/* ====================================================== */}

      <DataTablePagination
        table={table}
        totalRows={totalRows}
        pageSizeOptions={pageSizeOptions}
      />
    </div>
  );
}
