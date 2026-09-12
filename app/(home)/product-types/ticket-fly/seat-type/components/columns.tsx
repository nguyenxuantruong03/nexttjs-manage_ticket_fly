"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlySeatType } from "@/types/product-types/ticket-fly/fly-seat-type";

export function flySeatTypeColumns(
  actions: (row: FlySeatType) => ActionMenuItem<FlySeatType>[],
): ColumnDef<FlySeatType>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlySeatType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlySeatType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlySeatType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlySeatType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<FlySeatType>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlySeatType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    createDataTableColumn<FlySeatType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "seats",
      header: "Seats",
      cell: ({ row }) => row.original.seats?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<FlySeatType>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) =>
        row.createdAt ? new Date(row.createdAt).toLocaleString() : "-",
    }),

    createDataTableColumn<FlySeatType>({
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (row) =>
        row.updatedAt ? new Date(row.updatedAt).toLocaleString() : "-",
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
