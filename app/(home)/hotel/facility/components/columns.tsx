"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { HotelFacility } from "@/types/bookings/hotel/facilities.types";

export function facilityColumns(
  actions: (row: HotelFacility) => ActionMenuItem<HotelFacility>[],
): ColumnDef<HotelFacility>[] {
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
      id: "category",
      header: "Category",
      cell: ({ row }) => row.original.category?.name ?? "-",
    },
    {
      id: "hotels",
      header: "Hotels",
      cell: ({ row }) => row.original.hotels.length,
    },
    {
      id: "rooms",
      header: "Rooms",
      cell: ({ row }) => row.original.rooms.length,
    },
    {
      id: "medias",
      header: "Medias",
      cell: ({ row }) => row.original.medias.length,
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
