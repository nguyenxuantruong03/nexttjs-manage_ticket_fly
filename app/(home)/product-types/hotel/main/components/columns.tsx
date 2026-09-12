"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

export function hotelColumns(
  actions: (row: Hotel) => ActionMenuItem<Hotel>[],
): ColumnDef<Hotel>[] {
  return [
    createSelectionColumn<Hotel>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Hotel>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "serviceTypeId",
      header: "Service Type ID",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "serviceType",
      header: "Service Type",
      cell: (row) => row.serviceType?.name ?? "-",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "bookingItemTypeId",
      header: "Booking Item Type ID",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "bookingItemType",
      header: "Booking Item Type",
      cell: (row) => row.bookingItemType?.name ?? "-",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "slug",
      header: "Slug",
    }),

    // ======================================================
    // HOTEL INFORMATION
    // ======================================================

    createDataTableColumn<Hotel>({
      accessorKey: "information",
      header: "Provider Booking",
      cell: (row) => row.information?.providerBookingId ?? "-",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "information",
      header: "Address",
      cell: (row) => row.information?.addressId ?? "-",
    }),

    // ======================================================
    // BRAND / STAR RATING
    // ======================================================

    createDataTableColumn<Hotel>({
      accessorKey: "brandId",
      header: "Brand ID",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "brand",
      header: "Brand",
      cell: (row) => row.brand?.name ?? "-",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "starRatingId",
      header: "Star Rating ID",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "starRating",
      header: "Star Rating",
      cell: (row) => row.starRating?.name ?? "-",
    }),

    // ======================================================
    // ROOMS
    // ======================================================

    {
      id: "roomTypes",
      header: "Room Types",
      cell: ({ row }) => row.original.roomTypes?.length ?? 0,
    },

    {
      id: "inventories",
      header: "Inventories",
      cell: ({ row }) => row.original.inventories?.length ?? 0,
    },

    // ======================================================
    // REVIEWS
    // ======================================================

    createDataTableColumn<Hotel>({
      accessorKey: "ratingAverage",
      header: "Rating",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "reviewCount",
      header: "Reviews",
    }),

    {
      id: "reviews",
      header: "Review Data",
      cell: ({ row }) =>
        row.original.reviews?.length
          ? row.original.reviews
              .map((review) => review.overallRating)
              .join(", ")
          : "-",
    },

    // ======================================================
    // POLICIES
    // ======================================================

    {
      id: "policies",
      header: "Policies",
      cell: ({ row }) => row.original.policies?.length ?? 0,
    },

    createDataTableColumn<Hotel>({
      accessorKey: "checkinPolicy",
      header: "Check-In Policy",
      cell: (row) => row.checkinPolicy?.id ?? "-",
    }),

    // ======================================================
    // FACILITIES
    // ======================================================

    {
      id: "facilities",
      header: "Facilities",
      cell: ({ row }) => row.original.facilities?.length ?? 0,
    },

    // ======================================================
    // ACCESSIBILITY / AWARDS
    // ======================================================

    {
      id: "accessibilities",
      header: "Accessibilities",
      cell: ({ row }) => row.original.accessibilities?.length ?? 0,
    },

    {
      id: "awards",
      header: "Awards",
      cell: ({ row }) => row.original.awards?.length ?? 0,
    },

    // ======================================================
    // MEDIA
    // ======================================================

    {
      id: "medias",
      header: "Media",
      cell: ({ row }) => row.original.medias?.length ?? 0,
    },

    // ======================================================
    // PACKAGE / EXTRA
    // ======================================================

    {
      id: "hotelPackageMapper",
      header: "Packages",
      cell: ({ row }) => row.original.hotelPackageMapper?.length ?? 0,
    },

    {
      id: "hotelExtraMapper",
      header: "Extras",
      cell: ({ row }) => row.original.hotelExtraMapper?.length ?? 0,
    },

    // ======================================================
    // SERVICES
    // ======================================================

    {
      id: "mealOptions",
      header: "Meal Options",
      cell: ({ row }) => row.original.mealOptions?.length ?? 0,
    },

    {
      id: "openingHours",
      header: "Opening Hours",
      cell: ({ row }) => row.original.openingHours?.length ?? 0,
    },

    {
      id: "descriptions",
      header: "Descriptions",
      cell: ({ row }) => row.original.descriptions?.length ?? 0,
    },

    createDataTableColumn<Hotel>({
      accessorKey: "contacts",
      header: "Contact",
      cell: (row) => row.contacts?.id ?? "-",
    }),

    {
      id: "sustainabilities",
      header: "Sustainabilities",
      cell: ({ row }) => row.original.sustainabilities?.length ?? 0,
    },

    // ======================================================
    // BOOKINGS / FAVORITES
    // ======================================================

    {
      id: "bookings",
      header: "Bookings",
      cell: ({ row }) => row.original.bookings?.length ?? 0,
    },

    {
      id: "favorites",
      header: "Favorites",
      cell: ({ row }) => row.original.favorites?.length ?? 0,
    },

    // ======================================================
    // SEARCH
    // ======================================================

    createDataTableColumn<Hotel>({
      accessorKey: "searchText",
      header: "Search Text",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "featured",
      header: "Featured",
      cell: (row) => (row.featured ? "Yes" : "No"),
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "searchable",
      header: "Searchable",
      cell: (row) => (row.searchable ? "Yes" : "No"),
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "searchPriority",
      header: "Search Priority",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "tagIds",
      header: "Tags",
      cell: (row) => row.tagIds?.length ?? 0,
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "aliases",
      header: "Aliases",
      cell: (row) => row.aliases?.join(", ") || "-",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "keywords",
      header: "Keywords",
      cell: (row) => row.keywords?.join(", ") || "-",
    }),

    // ======================================================
    // STATISTICS
    // ======================================================

    createDataTableColumn<Hotel>({
      accessorKey: "bookingCount",
      header: "Bookings Count",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "favoriteCount",
      header: "Favorites Count",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "status",
      header: "Status",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Hotel>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<Hotel>({
      accessorKey: "updatedAt",
      header: "Updated At",
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
