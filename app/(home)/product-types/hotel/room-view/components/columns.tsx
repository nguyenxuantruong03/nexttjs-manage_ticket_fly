"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { RoomView } from "@/types/product-types/hotel/room/room.types";

export function roomViewColumns(
  actions: (row: RoomView) => ActionMenuItem<RoomView>[],
): ColumnDef<RoomView>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<RoomView>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<RoomView>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<RoomView>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<RoomView>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<RoomView>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // SETTINGS
    // ======================================================

    createDataTableColumn<RoomView>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<RoomView>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<RoomView>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => row.createdAt.toLocaleString(),
    }),

    createDataTableColumn<RoomView>({
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (row) => row.updatedAt.toLocaleString(),
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
