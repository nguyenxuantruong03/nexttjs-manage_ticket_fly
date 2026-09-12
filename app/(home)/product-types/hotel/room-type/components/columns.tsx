"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";

export function roomTypeColumns(
  actions: (row: HotelRoomType) => ActionMenuItem<HotelRoomType>[],
): ColumnDef<HotelRoomType>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<HotelRoomType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<HotelRoomType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<HotelRoomType>({
      accessorKey: "code",
      header: "Code",
      cell: (row) => row.code ?? "-",
    }),

    createDataTableColumn<HotelRoomType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<HotelRoomType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // HOTEL
    // ======================================================

    createDataTableColumn<HotelRoomType>({
      accessorKey: "hotel",
      header: "Hotel",
      cell: (row) => row.hotel?.name ?? "-",
    }),

    // ======================================================
    // ROOM INFO
    // ======================================================

    createDataTableColumn<HotelRoomType>({
      accessorKey: "category",
      header: "Category",
      cell: (row) => row.category?.name ?? "-",
    }),

    createDataTableColumn<HotelRoomType>({
      accessorKey: "roomSize",
      header: "Size (m²)",
      cell: (row) => row.roomSize ?? "-",
    }),

    createDataTableColumn<HotelRoomType>({
      accessorKey: "bedCount",
      header: "Beds",
      cell: (row) => row.bedCount ?? "-",
    }),

    createDataTableColumn<HotelRoomType>({
      accessorKey: "bathroomCount",
      header: "Bathrooms",
      cell: (row) => row.bathroomCount ?? "-",
    }),

    createDataTableColumn<HotelRoomType>({
      accessorKey: "floor",
      header: "Floor",
      cell: (row) => row.floor ?? "-",
    }),

    // ======================================================
    // CAPACITY
    // ======================================================

    createDataTableColumn<HotelRoomType>({
      accessorKey: "maxGuests",
      header: "Guests",
      cell: (row) => row.maxGuests ?? "-",
    }),

    createDataTableColumn<HotelRoomType>({
      accessorKey: "maxAdults",
      header: "Adults",
      cell: (row) => row.maxAdults ?? "-",
    }),

    createDataTableColumn<HotelRoomType>({
      accessorKey: "maxChildren",
      header: "Children",
      cell: (row) => row.maxChildren ?? "-",
    }),

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

    createDataTableColumn<HotelRoomType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<HotelRoomType>({
      accessorKey: "sortOrder",
      header: "Sort",
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
