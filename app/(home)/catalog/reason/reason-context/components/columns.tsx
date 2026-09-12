"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { ReasonContext } from "@/types/common/catalog/reason-code.type";

export function reasonContextColumns(
  actions: (row: ReasonContext) => ActionMenuItem<ReasonContext>[],
): ColumnDef<ReasonContext>[] {
  return [
    // ======================================================
    // SELECT
    // ======================================================

    createSelectionColumn<ReasonContext>(),

    // ======================================================
    // ID
    // ======================================================

    createDataTableColumn<ReasonContext>({
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

    createDataTableColumn<ReasonContext>({
      accessorKey: "code",
      header: "Code",
      meta: {
        exportLabel: "Code",
      },
    }),

    createDataTableColumn<ReasonContext>({
      accessorKey: "name",
      header: "Name",
      meta: {
        exportLabel: "Name",
      },
    }),

    createDataTableColumn<ReasonContext>({
      accessorKey: "description",
      header: "Description",
      meta: {
        exportLabel: "Description",
      },
      cell: (row) => row.description ?? "-",
      exportValue: (row) => row.description ?? "",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<ReasonContext>({
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

    createDataTableColumn<ReasonContext>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Created At",
      },
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<ReasonContext>({
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
