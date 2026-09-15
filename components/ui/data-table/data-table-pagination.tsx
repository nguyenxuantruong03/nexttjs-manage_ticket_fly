"use client";

import * as React from "react";

import type { Table } from "@tanstack/react-table";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;

  totalRows?: number;

  pageSizeOptions?: number[];
}

export function DataTablePagination<TData>({
  table,
  totalRows,
  pageSizeOptions = [10, 20, 25, 30, 40, 50, 100],
}: DataTablePaginationProps<TData>) {
  /**
   * ==========================================================
   * CURRENT PAGINATION
   * ==========================================================
   */

  const { pageIndex, pageSize } = table.getState().pagination;

  /**
   * ==========================================================
   * PAGE COUNT
   * ==========================================================
   */

  const pageCount = table.getPageCount();

  const canPreviousPage = table.getCanPreviousPage();

  const canNextPage = table.getCanNextPage();

  /**
   * ==========================================================
   * PAGE SIZE
   * ==========================================================
   *
   * Không tạo:
   *
   * const [pageSize, setPageSize]
   *
   * ở đây.
   *
   * TanStack Table là source of truth.
   */

  const handlePageSizeChange = React.useCallback(
    (value: string) => {
      const nextPageSize = Number(value);

      if (!Number.isFinite(nextPageSize) || nextPageSize <= 0) {
        return;
      }

      /**
       * Reset về trang đầu
       * và đổi pageSize trong cùng
       * một pagination update.
       */
      table.setPagination((current) => ({
        ...current,
        pageIndex: 0,
        pageSize: nextPageSize,
      }));
    },
    [table],
  );

  /**
   * ==========================================================
   * PAGE CHANGE
   * ==========================================================
   */

  const handleFirstPage = React.useCallback(() => {
    table.setPageIndex(0);
  }, [table]);

  const handlePreviousPage = React.useCallback(() => {
    table.previousPage();
  }, [table]);

  const handleNextPage = React.useCallback(() => {
    table.nextPage();
  }, [table]);

  const handleLastPage = React.useCallback(() => {
    if (pageCount <= 0) {
      return;
    }

    table.setPageIndex(pageCount - 1);
  }, [pageCount, table]);

  /**
   * ==========================================================
   * RENDER
   * ==========================================================
   */

  return (
    <div className="flex items-center justify-between px-2">
      {/* ====================================================== */}
      {/* LEFT */}
      {/* ====================================================== */}

      <div className="flex flex-1 items-center gap-6 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length > 0 && (
          <div>
            {table.getFilteredSelectedRowModel().rows.length} dòng được chọn
          </div>
        )}

        {typeof totalRows === "number" && (
          <div>
            Tổng{" "}
            <span className="font-medium text-foreground">
              {totalRows.toLocaleString()}
            </span>{" "}
            dòng
          </div>
        )}
      </div>

      {/* ====================================================== */}
      {/* RIGHT */}
      {/* ====================================================== */}

      <div className="flex items-center gap-6">
        {/* ==================================================== */}
        {/* PAGE SIZE */}
        {/* ==================================================== */}

        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-sm font-medium">
            Số dòng / trang
          </p>

          <Select value={String(pageSize)} onValueChange={handlePageSizeChange}>
            <SelectTrigger
              className="h-8 w-[80px]"
              data-table-interactive
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              {pageSizeOptions.map((size) => (
                <SelectItem
                  key={size}
                  value={String(size)}
                  data-table-interactive
                >
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* ==================================================== */}
        {/* PAGE */}
        {/* ==================================================== */}

        <div className="flex min-w-[100px] items-center justify-center text-sm font-medium">
          Trang {pageIndex + 1} / {Math.max(pageCount, 1)}
        </div>

        {/* ==================================================== */}
        {/* NAVIGATION */}
        {/* ==================================================== */}

        <div className="flex items-center gap-1">
          {/* FIRST */}
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={handleFirstPage}
            disabled={!canPreviousPage}
            data-table-interactive
          >
            <span className="sr-only">Trang đầu</span>

            <ChevronsLeft className="h-4 w-4" />
          </Button>

          {/* PREVIOUS */}
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={handlePreviousPage}
            disabled={!canPreviousPage}
            data-table-interactive
          >
            <span className="sr-only">Trang trước</span>

            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* NEXT */}
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={handleNextPage}
            disabled={!canNextPage}
            data-table-interactive
          >
            <span className="sr-only">Trang sau</span>

            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* LAST */}
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={handleLastPage}
            disabled={!canNextPage}
            data-table-interactive
          >
            <span className="sr-only">Trang cuối</span>

            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
