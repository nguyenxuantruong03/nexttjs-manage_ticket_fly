"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { LegalDocument } from "@/types/common/commerce/compliance-legal.type";

export function legalDocumentColumns(
  actions: (row: LegalDocument) => ActionMenuItem<LegalDocument>[],
): ColumnDef<LegalDocument>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<LegalDocument>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<LegalDocument>({
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

    createDataTableColumn<LegalDocument>({
      accessorKey: "title",
      header: "Title",
      meta: {
        exportLabel: "Title",
        filterLabel: "Title",
      },
    }),

    createDataTableColumn<LegalDocument>({
      accessorKey: "merchantId",
      header: "Merchant ID",
      meta: {
        exportLabel: "Merchant ID",
        filterLabel: "Merchant ID",
      },
    }),

    createDataTableColumn<LegalDocument>({
      accessorKey: "fileUrl",
      header: "File URL",
      meta: {
        exportLabel: "File URL",
        filterLabel: "File URL",
      },
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<LegalDocument>({
      accessorKey: "status",
      header: "Status",
      meta: {
        exportLabel: "Status",
        filterLabel: "Status",
      },
    }),

    createDataTableColumn<LegalDocument>({
      accessorKey: "signedAt",
      header: "Signed At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Signed At",
      },
      cell: (row) =>
        row.signedAt ? new Date(row.signedAt).toLocaleString() : "-",
      exportValue: (row) =>
        row.signedAt ? new Date(row.signedAt).toLocaleString() : "",
    }),

    createDataTableColumn<LegalDocument>({
      accessorKey: "expiresAt",
      header: "Expires At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Expires At",
      },
      cell: (row) =>
        row.expiresAt ? new Date(row.expiresAt).toLocaleString() : "-",
      exportValue: (row) =>
        row.expiresAt ? new Date(row.expiresAt).toLocaleString() : "",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<LegalDocument>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Created At",
      },
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<LegalDocument>({
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
