"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { ReasonCode } from "@/types/common/catalog/reason-code.type";

export function reasonCodeColumns(
  actions: (row: ReasonCode) => ActionMenuItem<ReasonCode>[],
): ColumnDef<ReasonCode>[] {
  return [
    // ======================================================
    // SELECT
    // ======================================================

    createSelectionColumn<ReasonCode>(),

    // ======================================================
    // ID
    // ======================================================

    createDataTableColumn<ReasonCode>({
      accessorKey: "id",
      header: "ID",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "ID",
      },
      summary: {
        type: "count",
        label: "Số dòng",
      },
    }),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<ReasonCode>({
      accessorKey: "code",
      header: "Code",
      meta: {
        exportLabel: "Code",
      },
    }),

    createDataTableColumn<ReasonCode>({
      accessorKey: "title",
      header: "Title",
      meta: {
        exportLabel: "Title",
      },
    }),

    createDataTableColumn<ReasonCode>({
      accessorKey: "description",
      header: "Description",
      meta: {
        exportLabel: "Description",
      },
      cell: (row) => row.description ?? "-",
      exportValue: (row) => row.description ?? "",
    }),

    // ======================================================
    // CONTEXT
    // ======================================================

    createDataTableColumn<ReasonCode>({
      accessorKey: "context",
      header: "Context",
      exclude: ["sorting", "filtering"],
      meta: {
        exportLabel: "Context",
      },
      cell: (row) => row.context?.name ?? "-",
      exportValue: (row) => row.context?.name ?? "",
    }),

    // ======================================================
    // SEVERITY
    // ======================================================

    createDataTableColumn<ReasonCode>({
      accessorKey: "severity",
      header: "Severity",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "Severity",
      },
      summary: {
        type: "sum",
        value: (row) => row.severity ?? 0,
        label: "Tổng mức độ",
      },
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<ReasonCode>({
      accessorKey: "isActive",
      header: "Active",
      meta: {
        filterVariant: "boolean",
        exportLabel: "Active",
      },
      cell: (row) => (row.isActive ? "Yes" : "No"),
      exportValue: (row) => row.isActive,
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<ReasonCode>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Created At",
      },
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<ReasonCode>({
      accessorKey: "updatedAt",
      header: "Updated At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Updated At",
      },
      cell: (row) => new Date(row.updatedAt).toLocaleString(),
      exportValue: (row) => new Date(row.updatedAt).toLocaleString(),
    }),

    // ======================================================
    // ACTIONS
    // ======================================================

    {
      id: "actions",
      size: 56,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      enablePinning: false,
      enableResizing: false,
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
