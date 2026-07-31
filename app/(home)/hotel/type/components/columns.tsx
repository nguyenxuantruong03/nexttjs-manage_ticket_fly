"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { HotelType } from "@/types/bookings/hotel/core/hotel-information.types";

export function typeColumns(
  actions: (row: HotelType) => ActionMenuItem<HotelType>[],
): ColumnDef<HotelType>[] {
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
      id: "hotels",
      header: "Hotels",
      cell: ({ row }) => row.original.hotels.length,
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
      cell: ({ row }) => row.original.createdAt.toLocaleString(),
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: ({ row }) => row.original.updatedAt.toLocaleString(),
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
