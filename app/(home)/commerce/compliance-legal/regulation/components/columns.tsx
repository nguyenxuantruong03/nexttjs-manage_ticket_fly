"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { Regulation } from "@/types/common/commerce/compliance-legal.type";

export function regulationColumns(
  actions: (row: Regulation) => ActionMenuItem<Regulation>[],
): ColumnDef<Regulation>[] {
  return [
    // ======================================================
    // SELECT
    // ======================================================

    createSelectionColumn<Regulation>(),

    // ======================================================
    // ID
    // ======================================================

    createDataTableColumn<Regulation>({
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

    createDataTableColumn<Regulation>({
      accessorKey: "code",

      header: "Code",

      meta: {
        exportLabel: "Code",
      },
    }),

    createDataTableColumn<Regulation>({
      accessorKey: "version",

      header: "Version",

      meta: {
        align: "right",

        filterVariant: "number",

        exportLabel: "Version",
      },
    }),

    createDataTableColumn<Regulation>({
      accessorKey: "title",

      header: "Title",

      meta: {
        exportLabel: "Title",
      },
    }),

    createDataTableColumn<Regulation>({
      accessorKey: "content",

      header: "Content",

      exclude: ["sorting", "filtering"],

      meta: {
        exportLabel: "Content",
      },

      cell: (row) => row.content ?? "-",

      exportValue: (row) => row.content ?? "",
    }),

    // ======================================================
    // CATEGORY
    // ======================================================

    createDataTableColumn<Regulation>({
      accessorKey: "category",

      header: "Category",

      exclude: ["sorting", "filtering"],

      meta: {
        exportLabel: "Category",
      },

      cell: (row) => row.category?.name ?? "-",

      exportValue: (row) => row.category?.name ?? "",
    }),

    // ======================================================
    // EFFECTIVE PERIOD
    // ======================================================

    createDataTableColumn<Regulation>({
      accessorKey: "effectiveFrom",

      header: "Effective From",

      exclude: ["filtering"],

      meta: {
        exportLabel: "Effective From",
      },

      cell: (row) => new Date(row.effectiveFrom).toLocaleString(),

      exportValue: (row) => new Date(row.effectiveFrom).toLocaleString(),
    }),

    createDataTableColumn<Regulation>({
      accessorKey: "effectiveTo",

      header: "Effective To",

      exclude: ["filtering"],

      meta: {
        exportLabel: "Effective To",
      },

      cell: (row) =>
        row.effectiveTo ? new Date(row.effectiveTo).toLocaleString() : "-",

      exportValue: (row) =>
        row.effectiveTo ? new Date(row.effectiveTo).toLocaleString() : "",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Regulation>({
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

    createDataTableColumn<Regulation>({
      accessorKey: "createdAt",

      header: "Created At",

      exclude: ["filtering"],

      meta: {
        exportLabel: "Created At",
      },

      cell: (row) => new Date(row.createdAt).toLocaleString(),

      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<Regulation>({
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
