"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";

export function roomTypeColumns(
  actions: (row: HotelRoomType) => ActionMenuItem<HotelRoomType>[],
): ColumnDef<HotelRoomType>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "code",
      header: "Code",
      cell: ({ row }) => row.original.code ?? "-",
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

    // ======================================================
    // HOTEL
    // ======================================================

    {
      accessorKey: "hotel.name",
      header: "Hotel",
      cell: ({ row }) => row.original.hotel?.name ?? "-",
    },

    // ======================================================
    // ROOM INFO
    // ======================================================

    {
      accessorKey: "category.name",
      header: "Category",
      cell: ({ row }) => row.original.category?.name ?? "-",
    },
    {
      accessorKey: "roomSize",
      header: "Size (m²)",
      cell: ({ row }) => row.original.roomSize ?? "-",
    },
    {
      accessorKey: "bedCount",
      header: "Beds",
      cell: ({ row }) => row.original.bedCount ?? "-",
    },
    {
      accessorKey: "bathroomCount",
      header: "Bathrooms",
      cell: ({ row }) => row.original.bathroomCount ?? "-",
    },
    {
      accessorKey: "floor",
      header: "Floor",
      cell: ({ row }) => row.original.floor ?? "-",
    },

    // ======================================================
    // CAPACITY
    // ======================================================

    {
      accessorKey: "maxGuests",
      header: "Guests",
      cell: ({ row }) => row.original.maxGuests ?? "-",
    },
    {
      accessorKey: "maxAdults",
      header: "Adults",
      cell: ({ row }) => row.original.maxAdults ?? "-",
    },
    {
      accessorKey: "maxChildren",
      header: "Children",
      cell: ({ row }) => row.original.maxChildren ?? "-",
    },

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "medias",
      header: "Media",
      cell: ({ row }) => row.original.medias.length,
    },
    {
      id: "inventories",
      header: "Inventory",
      cell: ({ row }) => row.original.inventories.length,
    },
    {
      id: "facilities",
      header: "Facilities",
      cell: ({ row }) => row.original.facilities.length,
    },
    {
      id: "bedTypes",
      header: "Bed Types",
      cell: ({ row }) => row.original.bedTypes.length,
    },

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "active",
      header: "Active",
      cell: ({ row }) => (row.original.active ? "Yes" : "No"),
    },
    {
      accessorKey: "sortOrder",
      header: "Sort",
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
