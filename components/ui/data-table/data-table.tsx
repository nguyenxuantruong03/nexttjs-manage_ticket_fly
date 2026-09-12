"use client";

import * as React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  ColumnPinningState,
  PaginationState,
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

  /**
   * Đang tải dữ liệu -> hiện skeleton
   */
  isLoading?: boolean;

  /**
   * Field được search toàn cục.
   * Không truyền -> search hết field.
   */
  searchableFields?: (keyof TData)[];

  filterPlaceholder?: string;

  /**
   * Tắt toàn bộ feature cho cả bảng.
   */
  enableSorting?: boolean;
  enableColumnFilters?: boolean;
  enableResizing?: boolean;
  enablePinning?: boolean;
  enableExport?: boolean;

  exportFilename?: string;

  /**
   * Tiêu đề hiển thị trong file Excel/Word/PDF.
   */
  exportTitle?: string;

  /**
   * Bật/tắt dòng tổng cuối bảng.
   */
  enableSummaryRow?: boolean;

  /**
   * Lưu trạng thái view vào localStorage.
   */
  persistKey?: string;

  defaultDensity?: TableDensity;

  pageSizeOptions?: number[];

  emptyMessage?: string;

  onRowClick?: (row: TData) => void;

  onRowDoubleClick?: (row: TData) => void;

  onRowRightClick?: (row: TData) => void;

  /**
   * Render action cho các dòng đang được chọn.
   */
  bulkActions?: (
    selectedRows: TData[],
    clearSelection: () => void,
  ) => React.ReactNode;
}

function readPersistedState(key: string): Partial<DataTableViewState> | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(key);

    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading = false,
  searchableFields,
  filterPlaceholder = "Tìm kiếm...",
  enableSorting = true,
  enableColumnFilters = true,
  enableResizing = true,
  enablePinning = true,
  enableExport = true,
  exportFilename = "export.csv",
  exportTitle = "Danh sách dữ liệu",
  enableSummaryRow,
  persistKey,
  defaultDensity = "comfortable",
  pageSizeOptions = [10, 20, 25, 30, 40, 50],
  emptyMessage = "Không có dữ liệu.",
  onRowClick,
  onRowDoubleClick,
  onRowRightClick,
  bulkActions,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();

  const clickTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const storageKey = persistKey ? `data-table:${persistKey}` : undefined;

  const persisted = React.useMemo(
    () => (storageKey ? readPersistedState(storageKey) : null),
    [storageKey],
  );

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(persisted?.columnVisibility ?? {});

  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>(
    persisted?.columnPinning ?? {},
  );

  const [rowSelection, setRowSelection] = React.useState({});

  const [globalFilter, setGlobalFilter] = React.useState("");

  const [refreshing, setRefreshing] = React.useState(false);

  const [density, setDensity] = React.useState<TableDensity>(
    persisted?.density ?? defaultDensity,
  );

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: persisted?.pageSize ?? pageSizeOptions[0] ?? 10,
  });

  // =========================================================
  // PERSIST VIEW STATE
  // =========================================================

  React.useEffect(() => {
    if (!storageKey) {
      return;
    }

    const state: DataTableViewState = {
      columnVisibility,
      columnPinning,
      density,
      pageSize: pagination.pageSize,
    };

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // localStorage không khả dụng -> bỏ qua
    }
  }, [
    storageKey,
    columnVisibility,
    columnPinning,
    density,
    pagination.pageSize,
  ]);

  // =========================================================
  // CLEANUP CLICK TIMEOUT
  // =========================================================

  React.useEffect(() => {
    return () => {
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
        clickTimeout.current = null;
      }
    };
  }, []);

  // =========================================================
  // REFRESH
  // =========================================================

  const handleRefresh = React.useCallback(async () => {
    setRefreshing(true);

    router.refresh();

    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, [router]);

  // =========================================================
  // RESET VIEW
  // =========================================================

  const handleResetView = React.useCallback(() => {
    setSorting([]);
    setColumnFilters([]);
    setColumnVisibility({});
    setColumnPinning({});
    setGlobalFilter("");
  }, []);

  // =========================================================
  // GLOBAL FILTER
  // =========================================================

  const globalFilterFn = React.useCallback(
    (row: { original: unknown }, _id: string, value: string) => {
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

        if (field == null) {
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

  // =========================================================
  // TABLE
  // =========================================================

  const table = useReactTable({
    data,
    columns,

    enableSorting,
    enableColumnFilters,
    enableColumnResizing: enableResizing,
    enableColumnPinning: enablePinning,

    columnResizeMode: "onChange",

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    globalFilterFn,

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnPinningChange: setColumnPinning,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      columnPinning,
      rowSelection,
      globalFilter,
      pagination,
    },
  });

  // =========================================================
  // INTERACTIVE TARGET
  // =========================================================
  //
  // Những element có:
  //
  // data-table-interactive
  //
  // sẽ KHÔNG trigger:
  //
  // onRowClick
  // onRowDoubleClick
  // onRowRightClick
  //
  // Ví dụ:
  // - Checkbox
  // - Button
  // - DropdownMenu
  // - RowActions
  // - Link
  // =========================================================

  const isInteractiveTarget = (event: React.SyntheticEvent): boolean => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return false;
    }

    return target.closest("[data-table-interactive]") !== null;
  };

  // =========================================================
  // ACTIVE VIEW
  // =========================================================

  const hasActiveViewChanges =
    sorting.length > 0 ||
    columnFilters.length > 0 ||
    globalFilter !== "" ||
    Object.keys(columnVisibility).length > 0 ||
    (columnPinning.left?.length ?? 0) > 0 ||
    (columnPinning.right?.length ?? 0) > 0;

  // =========================================================
  // SELECTION
  // =========================================================

  const selectedRows = table.getFilteredSelectedRowModel().rows;

  // =========================================================
  // DENSITY
  // =========================================================

  const cellPadding = DENSITY_ROW_CLASS[density];

  // =========================================================
  // SUMMARY
  // =========================================================

  const summaryColumns = table
    .getVisibleLeafColumns()
    .filter((column) => column.columnDef.meta?.summary);

  const showSummaryRow =
    (enableSummaryRow ?? summaryColumns.length > 0) &&
    summaryColumns.length > 0;

  const summaryRows = showSummaryRow
    ? table.getFilteredRowModel().rows.map((row) => row.original)
    : [];

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="space-y-4">
      {/* =====================================================
          TOOLBAR
      ===================================================== */}

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

      {/* =====================================================
          BULK ACTIONS
      ===================================================== */}

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

      {/* =====================================================
          TABLE
      ===================================================== */}

      <div className="w-full overflow-x-auto rounded-lg border">
        <Table
          style={{
            width: table.getTotalSize(),
          }}
          className="min-w-max"
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <TableHeader className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  const pinned = header.column.getIsPinned();

                  return (
                    <TableHead
                      key={header.id}
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

                        zIndex: pinned ? 1 : 0,
                      }}
                      className={cn(pinned && "bg-background shadow-sm")}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}

                      {/* COLUMN RESIZE */}

                      {enableResizing && header.column.getCanResize() && (
                        <div
                          data-table-interactive
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
                            header.column.getIsResizing()
                              ? "bg-primary"
                              : "hover:bg-border",
                          )}
                        />
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          {/* =================================================
              BODY
          ================================================= */}

          <TableBody>
            {/* =================================================
                LOADING
            ================================================= */}

            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <TableRow key={`skeleton-${index}`}>
                  {columns.map((_, columnIndex) => (
                    <TableCell key={columnIndex} className={cellPadding}>
                      <Skeleton className="h-5 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows.length ? (
              /* =================================================
                 DATA
              ================================================= */

              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  tabIndex={onRowClick ? 0 : undefined}
                  className={cn(
                    "cursor-pointer transition-colors",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-ring",
                    "focus-visible:ring-inset",
                  )}
                  // =================================================
                  // SINGLE CLICK
                  // =================================================
                  onClick={(event) => {
                    if (isInteractiveTarget(event)) {
                      event.stopPropagation();

                      if (clickTimeout.current) {
                        clearTimeout(clickTimeout.current);
                        clickTimeout.current = null;
                      }

                      return;
                    }

                    /**
                     * Browser sẽ fire click trước double click.
                     *
                     * Nếu detail = 2 thì bỏ single click.
                     */
                    if (event.detail === 2) {
                      return;
                    }

                    if (clickTimeout.current) {
                      clearTimeout(clickTimeout.current);
                    }

                    clickTimeout.current = setTimeout(() => {
                      onRowClick?.(row.original);

                      clickTimeout.current = null;
                    }, 250);
                  }}
                  // =================================================
                  // DOUBLE CLICK
                  // =================================================
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
                  // =================================================
                  // RIGHT CLICK
                  // =================================================
                  onContextMenu={(event) => {
                    if (isInteractiveTarget(event)) {
                      event.stopPropagation();
                      return;
                    }

                    event.preventDefault();

                    onRowRightClick?.(row.original);
                  }}
                  // =================================================
                  // KEYBOARD
                  // =================================================
                  onKeyDown={(event) => {
                    if (isInteractiveTarget(event)) {
                      return;
                    }

                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();

                      onRowClick?.(row.original);
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
                        className={cn(cellPadding, pinned && "bg-background")}
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
              /* =================================================
                 EMPTY
              ================================================= */

              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={columns.length}
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

          {/* =================================================
              SUMMARY
          ================================================= */}

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
                        cellPadding,

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

      {/* =====================================================
          PAGINATION
      ===================================================== */}

      <DataTablePagination table={table} pageSizeOptions={pageSizeOptions} />
    </div>
  );
}
