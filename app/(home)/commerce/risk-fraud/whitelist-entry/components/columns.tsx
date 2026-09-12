"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { WhitelistEntry } from "@/types/common/commerce/risk-fraud.type";

export function whitelistEntryColumns(
  actions: (row: WhitelistEntry) => ActionMenuItem<WhitelistEntry>[],
): ColumnDef<WhitelistEntry>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<WhitelistEntry>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<WhitelistEntry>({
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

    createDataTableColumn<WhitelistEntry>({
      accessorKey: "type",
      header: "Type",
      meta: {
        exportLabel: "Type",
        filterLabel: "Type",
      },
    }),

    createDataTableColumn<WhitelistEntry>({
      accessorKey: "value",
      header: "Value",
      meta: {
        exportLabel: "Value",
        filterLabel: "Value",
      },
    }),

    createDataTableColumn<WhitelistEntry>({
      accessorKey: "note",
      header: "Note",
      exclude: ["sorting", "filtering"],
      meta: {
        exportLabel: "Note",
      },
      cell: (row) => row.note ?? "-",
      exportValue: (row) => row.note ?? "",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<WhitelistEntry>({
      accessorKey: "isActive",
      header: "Active",
      meta: {
        filterVariant: "boolean",
        exportLabel: "Active",
        filterLabel: "Active",
      },
      cell: (row) => (row.isActive ? "Yes" : "No"),
      exportValue: (row) => row.isActive,
    }),

    // ======================================================
    // CREATED BY
    // ======================================================

    createDataTableColumn<WhitelistEntry>({
      accessorKey: "createdBy",
      header: "Created By",
      exclude: ["sorting", "filtering"],
      meta: {
        exportLabel: "Created By",
      },
      cell: (row) => row.createdBy ?? "-",
      exportValue: (row) => row.createdBy ?? "",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<WhitelistEntry>({
      accessorKey: "expiresAt",
      header: "Expires At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Expires At",
      },
      cell: (row) =>
        row.expiresAt ? new Date(row.expiresAt).toLocaleString() : "Never",
      exportValue: (row) =>
        row.expiresAt ? new Date(row.expiresAt).toLocaleString() : "Never",
    }),

    createDataTableColumn<WhitelistEntry>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Created At",
      },
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
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
