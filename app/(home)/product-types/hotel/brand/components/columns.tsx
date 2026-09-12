"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { HotelBrand } from "@/types/product-types/hotel/hotel-detail";

export function hotelBrandColumns(
  actions: (row: HotelBrand) => ActionMenuItem<HotelBrand>[],
): ColumnDef<HotelBrand>[] {
  return [
    createSelectionColumn<HotelBrand>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<HotelBrand>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<HotelBrand>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<HotelBrand>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<HotelBrand>({
      accessorKey: "logo",
      header: "Logo",
      cell: (row) => row.logo ?? "-",
    }),

    // ======================================================
    // SETTINGS
    // ======================================================

    createDataTableColumn<HotelBrand>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<HotelBrand>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => row.createdAt.toLocaleString(),
    }),

    createDataTableColumn<HotelBrand>({
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
