"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

export function yachtColumns(
  actions: (row: Yacht) => ActionMenuItem<Yacht>[],
): ColumnDef<Yacht>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<Yacht>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Yacht>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "providerBookingId",
      header: "Provider Booking",
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "serviceTypeId",
      header: "Service Type",
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "bookingItemTypeId",
      header: "Booking Item Type",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Yacht>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // SEARCH METADATA
    // ======================================================

    createDataTableColumn<Yacht>({
      accessorKey: "featured",
      header: "Featured",
      cell: (row) => (row.featured ? "Yes" : "No"),
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "searchable",
      header: "Searchable",
      cell: (row) => (row.searchable ? "Yes" : "No"),
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "searchPriority",
      header: "Search Priority",
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "ratingAverage",
      header: "Rating",
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "reviewCount",
      header: "Reviews",
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "bookingCount",
      header: "Bookings",
    }),

    createDataTableColumn<Yacht>({
      accessorKey: "favoriteCount",
      header: "Favorites",
    }),

    // ======================================================
    // VEHICLE
    // ======================================================

    {
      id: "vehicle",
      header: "Vehicle",
      cell: ({ row }) => (row.original.vehicle ? "Yes" : "No"),
    },

    // ======================================================
    // MARINA
    // ======================================================

    {
      id: "marina",
      header: "Marina",
      cell: ({ row }) => row.original.marina?.length ?? 0,
    },

    // ======================================================
    // EXTRAS
    // ======================================================

    {
      id: "extras",
      header: "Extras",
      cell: ({ row }) => row.original.yachtExtraMapper?.length ?? 0,
    },

    // ======================================================
    // PACKAGES
    // ======================================================

    {
      id: "packages",
      header: "Packages",
      cell: ({ row }) => row.original.yachtPackageMapper?.length ?? 0,
    },

    // ======================================================
    // ROUTES
    // ======================================================

    {
      id: "routes",
      header: "Routes",
      cell: ({ row }) => row.original.routes?.length ?? 0,
    },

    // ======================================================
    // AVAILABILITY
    // ======================================================

    {
      id: "availability",
      header: "Availability",
      cell: ({ row }) => (row.original.availability ? "Yes" : "No"),
    },

    // ======================================================
    // PRICE
    // ======================================================

    {
      id: "price",
      header: "Price",
      cell: ({ row }) => (row.original.price ? "Yes" : "No"),
    },

    // ======================================================
    // POLICIES
    // ======================================================

    {
      id: "policies",
      header: "Policies",
      cell: ({ row }) => row.original.policies?.length ?? 0,
    },

    // ======================================================
    // NOTICE
    // ======================================================

    {
      id: "notice",
      header: "Notice",
      cell: ({ row }) => (row.original.notice ? "Yes" : "No"),
    },

    // ======================================================
    // BOOKINGS
    // ======================================================

    {
      id: "bookings",
      header: "Bookings",
      cell: ({ row }) => row.original.bookings?.length ?? 0,
    },

    // ======================================================
    // INVENTORY LOCKS
    // ======================================================

    {
      id: "locks",
      header: "Locks",
      cell: ({ row }) => row.original.locks?.length ?? 0,
    },

    // ======================================================
    // REVIEWS
    // ======================================================

    {
      id: "reviews",
      header: "Reviews",
      cell: ({ row }) => row.original.reviews?.length ?? 0,
    },

    // ======================================================
    // IMAGES
    // ======================================================

    {
      id: "image",
      header: "Images",
      cell: ({ row }) => row.original.image?.length ?? 0,
    },

    // ======================================================
    // FAVORITES
    // ======================================================

    {
      id: "favorites",
      header: "Favorites",
      cell: ({ row }) => row.original.favorites?.length ?? 0,
    },

    // ======================================================
    // RATING SUMMARY
    // ======================================================

    {
      id: "ratingSummary",
      header: "Rating Summary",
      cell: ({ row }) => (row.original.ratingSummary ? "Yes" : "No"),
    },

    // ======================================================
    // CREW
    // ======================================================

    {
      id: "crew",
      header: "Crew",
      cell: ({ row }) => row.original.crew?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Yacht>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) =>
        row.createdAt ? new Date(row.createdAt).toLocaleString() : "-",
    }),

    createDataTableColumn<Yacht>({
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
