"use client";

import * as React from "react";

import type { ColumnDef, Table } from "@tanstack/react-table";

import {
  BarChart3,
  Check,
  Download,
  RefreshCw,
  Rows3,
  RotateCcw,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

import { exportRows } from "./export-utils";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableChartDialog } from "./data-table-chart-dialog";

import {
  DENSITY_LABEL,
  EXPORT_FORMAT_LABEL,
  type ExportFormat,
  type TableDensity,
} from "./data-table-types";

const EXPORT_FORMATS: ExportFormat[] = ["csv", "xlsx", "doc", "json", "pdf"];

interface DataTableToolbarProps<TData, TValue> {
  table: Table<TData>;
  columns: ColumnDef<TData, TValue>[];

  globalFilter: string;
  onGlobalFilterChange: (value: string) => void;
  filterPlaceholder: string;

  onRefresh: () => void;
  refreshing: boolean;

  onResetView: () => void;
  hasActiveViewChanges: boolean;

  enableExport: boolean;
  exportFilename: string;
  exportTitle?: string;

  density: TableDensity;
  onDensityChange: (density: TableDensity) => void;

  /** Dùng để lưu/khôi phục cấu hình biểu đồ đã chọn vào localStorage */
  persistKey?: string;
}

export function DataTableToolbar<TData, TValue>({
  table,
  columns,
  globalFilter,
  onGlobalFilterChange,
  filterPlaceholder,
  onRefresh,
  refreshing,
  onResetView,
  hasActiveViewChanges,
  enableExport,
  exportFilename,
  exportTitle,
  density,
  onDensityChange,
  persistKey,
}: DataTableToolbarProps<TData, TValue>) {
  const [chartOpen, setChartOpen] = React.useState(false);

  const activeFilterColumns = table.getAllColumns().filter((column) => {
    const value = column.getFilterValue();

    if (value === undefined || value === "") {
      return false;
    }

    if (Array.isArray(value) && value.every((item) => item === undefined)) {
      return false;
    }

    return true;
  });

  const selectedCount = table.getFilteredSelectedRowModel().rows.length;

  // Tóm tắt các filter đang active (dạng "Type: Ảnh, Size: 10 – 200")
  // để hiển thị trong dialog biểu đồ.
  const activeFilterSummary = activeFilterColumns.map((column) => {
    const meta = column.columnDef.meta;

    const label = meta?.filterLabel ?? meta?.exportLabel ?? column.id;

    const value = column.getFilterValue();

    const display = Array.isArray(value)
      ? value.filter((item) => item !== undefined).join(" – ")
      : String(value);

    return `${label}: ${display}`;
  });

  return (
    <div className="space-y-2.5">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 shrink-0"
          onClick={onRefresh}
          disabled={refreshing}
        >
          <RefreshCw className={cn("h-4 w-4", refreshing && "animate-spin")} />
        </Button>

        <Input
          placeholder={filterPlaceholder}
          value={globalFilter}
          onChange={(event) => onGlobalFilterChange(event.target.value)}
          className="h-9 max-w-xs"
        />

        {hasActiveViewChanges && (
          <Button
            variant="ghost"
            size="sm"
            className="h-9 text-muted-foreground"
            onClick={onResetView}
          >
            <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
            Đặt lại
          </Button>
        )}

        <div className="ml-auto flex items-center gap-2">
          {/* ======================================================
              DENSITY
              ====================================================== */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5">
                <Rows3 className="h-3.5 w-3.5" />
                {DENSITY_LABEL[density]}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {(Object.keys(DENSITY_LABEL) as TableDensity[]).map((item) => {
                const selected = item === density;

                return (
                  <DropdownMenuItem
                    key={item}
                    onClick={() => onDensityChange(item)}
                    className={cn(
                      "flex items-center justify-between gap-4",
                      selected && "font-medium",
                    )}
                  >
                    <span>{DENSITY_LABEL[item]}</span>

                    {selected && <Check className="h-4 w-4 text-primary" />}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* ======================================================
              CHART
              ====================================================== */}
          {enableExport && (
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={() => setChartOpen(true)}
            >
              <BarChart3 className="h-3.5 w-3.5" />
              Biểu đồ
            </Button>
          )}

          {/* ======================================================
              EXPORT
              ====================================================== */}
          {enableExport && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Download className="h-3.5 w-3.5" />
                  Xuất file
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                {EXPORT_FORMATS.map((format) => (
                  <DropdownMenuSub key={format}>
                    <DropdownMenuSubTrigger>
                      {EXPORT_FORMAT_LABEL[format]}
                    </DropdownMenuSubTrigger>

                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          onClick={() =>
                            exportRows(
                              format,
                              columns,
                              table
                                .getFilteredRowModel()
                                .rows.map((row) => row.original),
                              exportFilename,
                              table.getState().columnVisibility,
                              exportTitle,
                            )
                          }
                        >
                          Tất cả ({table.getFilteredRowModel().rows.length} dòng
                          đã lọc)
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          disabled={selectedCount === 0}
                          onClick={() =>
                            exportRows(
                              format,
                              columns,
                              table
                                .getFilteredSelectedRowModel()
                                .rows.map((row) => row.original),
                              exportFilename,
                              table.getState().columnVisibility,
                              exportTitle,
                            )
                          }
                        >
                          Đã chọn ({selectedCount} dòng)
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <DataTableViewOptions table={table} />
        </div>
      </div>

      {/* ==========================================================
          CHART DIALOG
          ========================================================== */}
      {enableExport && (
        <DataTableChartDialog
          open={chartOpen}
          onOpenChange={setChartOpen}
          columns={columns}
          rows={table.getFilteredRowModel().rows.map((row) => row.original)}
          columnVisibility={table.getState().columnVisibility}
          exportFilename={exportFilename}
          exportTitle={exportTitle ?? "Danh sách dữ liệu"}
          activeFilterSummary={activeFilterSummary}
          persistKey={persistKey}
        />
      )}

      {/* ==========================================================
          ACTIVE FILTERS
          ========================================================== */}
      {activeFilterColumns.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          {activeFilterColumns.map((column) => {
            const meta = column.columnDef.meta;

            const label = meta?.filterLabel ?? meta?.exportLabel ?? column.id;

            const value = column.getFilterValue();

            const display = Array.isArray(value)
              ? value.filter((item) => item !== undefined).join(" – ")
              : String(value);

            return (
              <Badge
                key={column.id}
                variant="secondary"
                className="gap-1 rounded-full py-0.5 pl-2.5 pr-1 font-normal"
              >
                <span className="text-muted-foreground">{label}:</span>{" "}
                {display}
                <button
                  type="button"
                  aria-label={`Xoá lọc ${label}`}
                  className="ml-0.5 rounded-full p-0.5 hover:bg-background/80"
                  onClick={() => column.setFilterValue(undefined)}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
}
