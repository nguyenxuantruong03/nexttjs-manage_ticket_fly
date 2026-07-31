"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { BathroomType } from "@/types/bookings/hotel/room/room.types";

export function bathroomTypeColumns(
  actions: (row: BathroomType) => ActionMenuItem<BathroomType>[],
): ColumnDef<BathroomType>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => row.original.description ?? "-",
    },
    {
      accessorKey: "icon",
      header: "Icon",
      cell: ({ row }) => row.original.icon ?? "-",
    },

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "rooms",
      header: "Rooms",
      cell: ({ row }) => row.original.rooms.length,
    },

    // ======================================================
    // SETTINGS
    // ======================================================

    {
      accessorKey: "active",
      header: "Active",
      cell: ({ row }) => (row.original.active ? "Yes" : "No"),
    },
    {
      accessorKey: "sortOrder",
      header: "Sort Order",
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: ({ row }) => new Date(row.original.updatedAt).toLocaleString(),
    },

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
