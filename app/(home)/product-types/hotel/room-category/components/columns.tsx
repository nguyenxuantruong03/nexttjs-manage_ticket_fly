"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { RoomCategory } from "@/types/product-types/hotel/room/room.types";

export function roomCategoryColumns(
  actions: (row: RoomCategory) => ActionMenuItem<RoomCategory>[],
): ColumnDef<RoomCategory>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<RoomCategory>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<RoomCategory>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<RoomCategory>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<RoomCategory>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<RoomCategory>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // SETTINGS
    // ======================================================

    createDataTableColumn<RoomCategory>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<RoomCategory>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<RoomCategory>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => row.createdAt.toLocaleString(),
    }),

    createDataTableColumn<RoomCategory>({
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
