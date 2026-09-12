"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { HotelStarRating } from "@/types/product-types/hotel/hotel-detail";

export function starRatingColumns(
  actions: (row: HotelStarRating) => ActionMenuItem<HotelStarRating>[],
): ColumnDef<HotelStarRating>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<HotelStarRating>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<HotelStarRating>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<HotelStarRating>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<HotelStarRating>({
      accessorKey: "star",
      header: "Stars",
      cell: (row) => `${row.star} ★`,
    }),

    createDataTableColumn<HotelStarRating>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<HotelStarRating>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => row.createdAt.toLocaleString(),
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
