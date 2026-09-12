"use client";

import * as React from "react";
import type {
  Column,
  ColumnDef,
  FilterFn,
  FilterFnOption,
  Row,
} from "@tanstack/react-table";

import {
  ArrowDown,
  ArrowUp,
  ChevronsUpDown,
  Filter,
  Pin,
  PinOff,
  EyeOff,
  Search,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import type {
  DataTableFeature,
  FilterVariant,
  ColumnSummary,
} from "./data-table-types";
import { stringifyExportValue } from "./export-utils";

/* ------------------------------------------------------------------ */
/* Selection column                                                   */
/* ------------------------------------------------------------------ */

export function createSelectionColumn<TData>(): ColumnDef<TData> {
  return {
    id: "select",
    size: 36,
    enableSorting: false,
    enableColumnFilter: false,
    enableHiding: false,
    enableResizing: false,
    enablePinning: false,
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
        aria-label="Chọn tất cả"
      />
    ),
    cell: ({ row }) => (
      <div data-table-interactive>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(v) => row.toggleSelected(!!v)}
          aria-label="Chọn dòng"
        />
      </div>
    ),
  };
}

/* ------------------------------------------------------------------ */
/* Number range filter fn                                             */
/* ------------------------------------------------------------------ */

const numberRangeFilter: FilterFn<any> = (
  row: Row<any>,
  columnId: string,
  filterValue: [number | undefined, number | undefined],
) => {
  const value = Number(row.getValue(columnId));
  const [min, max] = filterValue ?? [];
  if (min !== undefined && value < min) return false;
  if (max !== undefined && value > max) return false;
  return true;
};

numberRangeFilter.autoRemove = (val) =>
  !val || (val[0] === undefined && val[1] === undefined);

/* ------------------------------------------------------------------ */
/* Column factory                                                     */
/* ------------------------------------------------------------------ */

type CreateColumnOptions<TData> = {
  accessorKey: keyof TData & string;
  header: string;
  cell?: (row: TData) => React.ReactNode;
  /** Tắt tính năng riêng cho cột này */
  exclude?: DataTableFeature[];
  meta?: {
    align?: "left" | "center" | "right";
    filterVariant?: FilterVariant;
    filterOptions?: { label: string; value: string }[];
    exportLabel?: string;
    filterLabel?: string;
  };
  size?: number;
  /**
   * Giá trị dùng khi xuất file (CSV/Excel/Word/PDF/JSON). Bắt buộc nên dùng
   * khi accessorKey trỏ tới mảng/object (vd: mảng các { id, name }) hoặc khi
   * `cell` định dạng lại giá trị hiển thị (vd: "12.3 MB", "1920px"...) — nếu
   * không, cột sẽ xuất ra giá trị thô và có thể hiện "[object Object]".
   */
  exportValue?: (row: TData) => unknown;
  /** Bật dòng tổng/thống kê ở cuối bảng cho cột này */
  summary?: ColumnSummary<TData>;
};

export function createDataTableColumn<TData>({
  accessorKey,
  header,
  cell,
  exclude = [],
  meta,
  size,
  exportValue,
  summary,
}: CreateColumnOptions<TData>): ColumnDef<TData> {
  const enableSorting = !exclude.includes("sorting");
  const enableColumnFilter = !exclude.includes("filtering");
  const enableHiding = !exclude.includes("hiding");
  const enablePinning = !exclude.includes("pinning");
  const filterVariant = meta?.filterVariant ?? "text";

  let filterFn: FilterFnOption<TData> | undefined;
  if (filterVariant === "number") {
    filterFn = numberRangeFilter as FilterFn<TData>;
  } else if (filterVariant === "boolean" || filterVariant === "select") {
    filterFn = "equalsString" as FilterFnOption<TData>;
  }

  const column: ColumnDef<TData> = {
    accessorKey,
    size,
    enableSorting,
    enableColumnFilter,
    enableHiding,
    enablePinning,
    meta: { exportLabel: header, exportValue, summary, ...meta },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={header} />
    ),
    cell: cell
      ? ({ row }) => cell(row.original)
      : ({ getValue }) => {
          const value = getValue();
          const display = stringifyExportValue(value);
          return (
            <span className="truncate">{display === "" ? "—" : display}</span>
          );
        },
  };

  if (filterFn) column.filterFn = filterFn;

  return column;
}

/* ------------------------------------------------------------------ */
/* Header: title + sort/pin/hide menu + filter popover                */
/* ------------------------------------------------------------------ */

interface HeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
}: HeaderProps<TData, TValue>) {
  const canSort = column.getCanSort();
  const canFilter = column.getCanFilter();
  const canPin = column.getCanPin();
  const canHide = column.getCanHide();
  const sorted = column.getIsSorted();
  const pinned = column.getIsPinned();
  const align = column.columnDef.meta?.align ?? "left";

  const filterValue = column.getFilterValue();
  const isFiltered =
    filterValue !== undefined &&
    filterValue !== "" &&
    !(Array.isArray(filterValue) && filterValue.every((v) => v === undefined));

  const hasMenu = canSort || canPin || canHide;

  const titleContent = (
    <span className="flex min-w-0 items-center gap-1.5">
      {pinned && <Pin className="h-3 w-3 shrink-0 text-primary" />}
      <span className="truncate">{title}</span>
      {sorted === "asc" && <ArrowUp className="h-3.5 w-3.5 shrink-0" />}
      {sorted === "desc" && <ArrowDown className="h-3.5 w-3.5 shrink-0" />}
      {!sorted && canSort && (
        <ChevronsUpDown className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-40" />
      )}
    </span>
  );

  return (
    <div
      data-table-interactive
      className={cn(
        "group flex min-w-0 items-center gap-0.5",
        align === "right" && "justify-end",
        align === "center" && "justify-center",
      )}
    >
      {hasMenu ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="-ml-3 h-8 min-w-0 max-w-full font-medium data-[state=open]:bg-accent"
            >
              {titleContent}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-44">
            {canSort && (
              <>
                <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                  <ArrowUp className="mr-2 h-4 w-4" /> Tăng dần
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                  <ArrowDown className="mr-2 h-4 w-4" /> Giảm dần
                </DropdownMenuItem>
                {sorted && (
                  <DropdownMenuItem onClick={() => column.clearSorting()}>
                    <X className="mr-2 h-4 w-4" /> Bỏ sắp xếp
                  </DropdownMenuItem>
                )}
              </>
            )}
            {canSort && (canPin || canHide) && <DropdownMenuSeparator />}
            {canPin && (
              <>
                {pinned !== "left" && (
                  <DropdownMenuItem onClick={() => column.pin("left")}>
                    <Pin className="mr-2 h-4 w-4" /> Ghim trái
                  </DropdownMenuItem>
                )}
                {pinned !== "right" && (
                  <DropdownMenuItem onClick={() => column.pin("right")}>
                    <Pin className="mr-2 h-4 w-4 rotate-180" /> Ghim phải
                  </DropdownMenuItem>
                )}
                {pinned && (
                  <DropdownMenuItem onClick={() => column.pin(false)}>
                    <PinOff className="mr-2 h-4 w-4" /> Bỏ ghim
                  </DropdownMenuItem>
                )}
              </>
            )}
            {canPin && canHide && <DropdownMenuSeparator />}
            {canHide && (
              <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
                <EyeOff className="mr-2 h-4 w-4" /> Ẩn cột
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <span
          className={cn(
            "truncate px-3 text-sm font-medium",
            align === "right" && "text-right",
          )}
        >
          {title}
        </span>
      )}

      {canFilter && (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-6 w-6 shrink-0 text-muted-foreground",
                isFiltered && "text-primary",
              )}
            >
              <Filter
                className={cn("h-3.5 w-3.5", isFiltered && "fill-primary/20")}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-60 space-y-3" align="start">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground">
                Lọc {title}
              </p>
              {isFiltered && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-1.5 text-xs text-muted-foreground hover:text-foreground"
                  onClick={() => column.setFilterValue(undefined)}
                >
                  Xoá
                </Button>
              )}
            </div>
            <ColumnFilterInput column={column} title={title} />
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Filter input theo variant                                          */
/* ------------------------------------------------------------------ */

function ColumnFilterInput<TData, TValue>({
  column,
  title,
}: {
  column: Column<TData, TValue>;
  title: string;
}) {
  const variant = column.columnDef.meta?.filterVariant ?? "text";
  const filterOptions = column.columnDef.meta?.filterOptions ?? [];

  if (variant === "boolean") {
    return (
      <Select
        value={(column.getFilterValue() as string) ?? ""}
        onValueChange={(v) => column.setFilterValue(v || undefined)}
      >
        <SelectTrigger className="h-8">
          <SelectValue placeholder="Tất cả" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="true">True</SelectItem>
          <SelectItem value="false">False</SelectItem>
        </SelectContent>
      </Select>
    );
  }

  if (variant === "select") {
    return (
      <Select
        value={(column.getFilterValue() as string) ?? ""}
        onValueChange={(v) => column.setFilterValue(v || undefined)}
      >
        <SelectTrigger className="h-8">
          <SelectValue placeholder="Tất cả" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  if (variant === "number") {
    const [min, max] = (column.getFilterValue() as [number?, number?]) ?? [];
    return (
      <div className="flex items-center gap-2">
        <Input
          type="number"
          inputMode="decimal"
          placeholder="Từ"
          className="h-8"
          defaultValue={min ?? ""}
          onChange={(e) =>
            column.setFilterValue((old: [number?, number?] = []) => [
              e.target.value ? Number(e.target.value) : undefined,
              old?.[1],
            ])
          }
        />
        <span className="shrink-0 text-xs text-muted-foreground">đến</span>
        <Input
          type="number"
          inputMode="decimal"
          placeholder="Đến"
          className="h-8"
          defaultValue={max ?? ""}
          onChange={(e) =>
            column.setFilterValue((old: [number?, number?] = []) => [
              old?.[0],
              e.target.value ? Number(e.target.value) : undefined,
            ])
          }
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder={`Nhập ${title.toLowerCase()}...`}
        className="h-8 pl-7"
        defaultValue={(column.getFilterValue() as string) ?? ""}
        onChange={(e) => column.setFilterValue(e.target.value || undefined)}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Export (CSV / Excel / Word / JSON / PDF)                            */
/* Logic thật nằm ở export-utils.ts (đã sửa lỗi "[object Object]" và   */
/* thêm nhiều định dạng xuất file). Re-export ở đây để không phá vỡ    */
/* các import cũ dạng `from "./column-factory"`.                      */
/* ------------------------------------------------------------------ */

export {
  exportRows,
  exportRowsToCsv,
  exportRowsToExcel,
  exportRowsToWord,
  exportRowsToJson,
  exportRowsToPdf,
  stringifyExportValue,
} from "./export-utils";
