"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { Bus } from "@/types/product-types/bus/core/bus.types";

export function ticketBusColumns(
  actions: (row: Bus) => ActionMenuItem<Bus>[],
): ColumnDef<Bus>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<Bus>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Bus>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Bus>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Bus>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<Bus>({
      accessorKey: "providerBookingId",
      header: "Provider Booking",
    }),

    createDataTableColumn<Bus>({
      accessorKey: "bookingItemTypeId",
      header: "Booking Item Type",
    }),

    createDataTableColumn<Bus>({
      accessorKey: "serviceTypeId",
      header: "Service Type",
    }),

    // ======================================================
    // SEARCH METADATA
    // ======================================================

    createDataTableColumn<Bus>({
      accessorKey: "searchable",
      header: "Searchable",
      cell: (row) => (row.searchable ? "Yes" : "No"),
    }),

    createDataTableColumn<Bus>({
      accessorKey: "featured",
      header: "Featured",
      cell: (row) => (row.featured ? "Yes" : "No"),
    }),

    createDataTableColumn<Bus>({
      accessorKey: "searchPriority",
      header: "Search Priority",
    }),

    createDataTableColumn<Bus>({
      accessorKey: "ratingAverage",
      header: "Rating",
    }),

    createDataTableColumn<Bus>({
      accessorKey: "reviewCount",
      header: "Reviews",
    }),

    createDataTableColumn<Bus>({
      accessorKey: "bookingCount",
      header: "Bookings",
    }),

    createDataTableColumn<Bus>({
      accessorKey: "favoriteCount",
      header: "Favorites",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Bus>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "busExtraMapper",
      header: "Extras",
      cell: ({ row }) => row.original.busExtraMapper?.length ?? 0,
    },

    {
      id: "routes",
      header: "Routes",
      cell: ({ row }) => row.original.routes?.length ?? 0,
    },

    {
      id: "policyMappers",
      header: "Policies",
      cell: ({ row }) => row.original.policyMappers?.length ?? 0,
    },

    {
      id: "vehicle",
      header: "Vehicles",
      cell: ({ row }) => row.original.vehicle?.length ?? 0,
    },

    {
      id: "reviews",
      header: "Reviews",
      cell: ({ row }) => row.original.reviews?.length ?? 0,
    },

    {
      id: "busPackageMapper",
      header: "Packages",
      cell: ({ row }) => row.original.busPackageMapper?.length ?? 0,
    },

    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },

    {
      id: "favorites",
      header: "Favorites",
      cell: ({ row }) => row.original.favorites?.length ?? 0,
    },

    {
      id: "price",
      header: "Prices",
      cell: ({ row }) => row.original.price?.length ?? 0,
    },

    {
      id: "booking",
      header: "Bookings",
      cell: ({ row }) => row.original.booking?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Bus>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) =>
        row.createdAt ? new Date(row.createdAt).toLocaleString() : "-",
    }),

    createDataTableColumn<Bus>({
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
