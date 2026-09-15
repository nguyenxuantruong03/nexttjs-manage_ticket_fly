"use client";

import * as React from "react";
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";
import { AuditLog } from "@/types/system/system-governance.type";

interface Props {
  columns: ColumnDef<AuditLog>[];
  data: AuditLog[];

  onRowClick: (row: AuditLog) => void;
  onRowDoubleClick: (row: AuditLog) => void;
  onRowTripleClick: (row: AuditLog) => void;

  manualPagination?: boolean;
  pageCount?: number;
  totalRows?: number;
  pagination?: PaginationState;
  onPaginationChange?: React.Dispatch<React.SetStateAction<PaginationState>>;
}

const CLICK_DELAY = 300;

export function AuditLogTable({
  columns,
  data,
  onRowClick,
  onRowDoubleClick,
  onRowTripleClick,
  manualPagination = false,
  pageCount = 0,
  pagination,
  onPaginationChange,
}: Props) {
  const clickCountRef = React.useRef(0);
  const clickedRowIdRef = React.useRef<string | null>(null);

  const clickTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const resetClickState = React.useCallback(() => {
    clickCountRef.current = 0;
    clickedRowIdRef.current = null;

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    return () => {
      resetClickState();
    };
  }, [resetClickState]);

  const handleRowClick = React.useCallback(
    (row: AuditLog) => {
      if (clickedRowIdRef.current !== row.id) {
        clickCountRef.current = 0;

        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current);
        }
      }

      clickedRowIdRef.current = row.id;
      clickCountRef.current += 1;

      const clickCount = clickCountRef.current;

      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }

      clickTimeoutRef.current = setTimeout(() => {
        switch (clickCount) {
          case 1:
            onRowClick(row);
            break;

          case 2:
            onRowDoubleClick(row);
            break;

          case 3:
            onRowTripleClick(row);
            break;

          default:
            break;
        }

        resetClickState();
      }, CLICK_DELAY);
    },
    [onRowClick, onRowDoubleClick, onRowTripleClick, resetClickState],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    manualPagination,
    pageCount,

    state: {
      pagination,
    },

    onPaginationChange,
  });

  return (
    <div className="w-full overflow-x-auto rounded-lg border">
      <Table className="min-w-max">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-row-id={row.id}
                className={cn(
                  "cursor-pointer transition-colors",
                  "hover:bg-muted/50",
                )}
                onClick={(event) => {
                  const target = event.target;

                  if (
                    target instanceof HTMLElement &&
                    target.closest("[data-table-interactive]")
                  ) {
                    event.stopPropagation();
                    return;
                  }

                  handleRowClick(row.original);
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-40 text-center">
                Không có dữ liệu.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
