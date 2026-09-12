"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { SearchTag } from "@/types/searchs/search/tag.types";

export function tagColumns(
  actions: (row: SearchTag) => ActionMenuItem<SearchTag>[],
): ColumnDef<SearchTag>[] {
  return [
    createSelectionColumn<SearchTag>(),

    createDataTableColumn<SearchTag>({
      accessorKey: "id",
      header: "ID",
    }),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<SearchTag>({
      accessorKey: "name",
      header: "Name",
    }),

    // ======================================================
    // BOOKING TYPES
    // ======================================================

    createDataTableColumn<SearchTag>({
      accessorKey: "bookingTypes",
      header: "Booking Types",
      cell: (row) =>
        row.bookingTypes?.length
          ? row.bookingTypes.map((item) => item.name).join(", ")
          : "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<SearchTag>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<SearchTag>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<SearchTag>({
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (row) => new Date(row.updatedAt).toLocaleString(),
    }),

    // ======================================================
    // ACTIONS
    // ======================================================

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
