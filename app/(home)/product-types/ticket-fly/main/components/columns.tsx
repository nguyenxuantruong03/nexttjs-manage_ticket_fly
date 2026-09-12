"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

export function ticketFlyColumns(
  actions: (row: Fly) => ActionMenuItem<Fly>[],
): ColumnDef<Fly>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<Fly>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Fly>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Fly>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Fly>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<Fly>({
      accessorKey: "providerBookingId",
      header: "Provider Booking",
    }),

    createDataTableColumn<Fly>({
      accessorKey: "serviceTypeId",
      header: "Service Type",
    }),

    createDataTableColumn<Fly>({
      accessorKey: "bookingItemTypeId",
      header: "Booking Item Type",
    }),

    createDataTableColumn<Fly>({
      accessorKey: "airlineId",
      header: "Airline",
    }),

    // ======================================================
    // SEARCH
    // ======================================================

    createDataTableColumn<Fly>({
      accessorKey: "featured",
      header: "Featured",
      cell: (row) => (row.featured ? "Yes" : "No"),
    }),

    createDataTableColumn<Fly>({
      accessorKey: "searchable",
      header: "Searchable",
      cell: (row) => (row.searchable ? "Yes" : "No"),
    }),

    createDataTableColumn<Fly>({
      accessorKey: "searchPriority",
      header: "Search Priority",
    }),

    createDataTableColumn<Fly>({
      accessorKey: "ratingAverage",
      header: "Rating",
    }),

    createDataTableColumn<Fly>({
      accessorKey: "reviewCount",
      header: "Reviews",
    }),

    createDataTableColumn<Fly>({
      accessorKey: "bookingCount",
      header: "Bookings",
    }),

    createDataTableColumn<Fly>({
      accessorKey: "favoriteCount",
      header: "Favorites",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Fly>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "flyExtraMapper",
      header: "Extras",
      cell: ({ row }) => row.original.flyExtraMapper?.length ?? 0,
    },

    {
      id: "flyPackageMapper",
      header: "Packages",
      cell: ({ row }) => row.original.flyPackageMapper?.length ?? 0,
    },

    {
      id: "routes",
      header: "Routes",
      cell: ({ row }) => row.original.routes?.length ?? 0,
    },

    {
      id: "policies",
      header: "Policies",
      cell: ({ row }) => row.original.policies?.length ?? 0,
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
      id: "schedule",
      header: "Schedules",
      cell: ({ row }) => row.original.schedule?.length ?? 0,
    },

    {
      id: "price",
      header: "Price",
      cell: ({ row }) => (row.original.price ? "Yes" : "No"),
    },

    {
      id: "notice",
      header: "Notice",
      cell: ({ row }) => (row.original.notice ? "Yes" : "No"),
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Fly>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) =>
        row.createdAt ? new Date(row.createdAt).toLocaleString() : "-",
    }),

    createDataTableColumn<Fly>({
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
