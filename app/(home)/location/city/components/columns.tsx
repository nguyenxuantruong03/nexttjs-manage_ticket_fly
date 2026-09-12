"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { City } from "@/types/location/city";

import { ColumnDef } from "@tanstack/react-table";

export function cityColumns(
  actions: (row: City) => ActionMenuItem<City>[],
): ColumnDef<City>[] {
  return [
    createSelectionColumn<City>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<City>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<City>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<City>({
      accessorKey: "nativeName",
      header: "Native Name",
    }),

    createDataTableColumn<City>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<City>({
      accessorKey: "iataCode",
      header: "IATA Code",
    }),

    createDataTableColumn<City>({
      accessorKey: "subtitle",
      header: "Subtitle",
    }),

    createDataTableColumn<City>({
      accessorKey: "shortDescription",
      header: "Short Description",
    }),

    createDataTableColumn<City>({
      accessorKey: "description",
      header: "Description",
    }),

    // ======================================================
    // COUNTRY
    // ======================================================

    createDataTableColumn<City>({
      accessorKey: "countryId",
      header: "Country ID",
    }),

    createDataTableColumn<City>({
      accessorKey: "country",
      header: "Country",
      cell: (row) => row.country?.name ?? "-",
    }),

    createDataTableColumn<City>({
      accessorKey: "administrativeArea",
      header: "Administrative Area",
    }),

    createDataTableColumn<City>({
      accessorKey: "region",
      header: "Region",
    }),

    createDataTableColumn<City>({
      accessorKey: "isCapital",
      header: "Capital",
    }),

    // ======================================================
    // LOCATION
    // ======================================================

    createDataTableColumn<City>({
      accessorKey: "latitude",
      header: "Latitude",
    }),

    createDataTableColumn<City>({
      accessorKey: "longitude",
      header: "Longitude",
    }),

    createDataTableColumn<City>({
      accessorKey: "elevation",
      header: "Elevation",
    }),

    createDataTableColumn<City>({
      accessorKey: "timezone",
      header: "Timezone",
      cell: (row) => row.timezone?.name ?? "-",
    }),

    // ======================================================
    // SEARCH
    // ======================================================

    createDataTableColumn<City>({
      accessorKey: "searchPriority",
      header: "Search Priority",
    }),

    createDataTableColumn<City>({
      accessorKey: "displayOrder",
      header: "Display Order",
    }),

    createDataTableColumn<City>({
      accessorKey: "popularityScore",
      header: "Popularity Score",
    }),

    createDataTableColumn<City>({
      accessorKey: "featured",
      header: "Featured",
    }),

    createDataTableColumn<City>({
      accessorKey: "popular",
      header: "Popular",
    }),

    createDataTableColumn<City>({
      accessorKey: "searchable",
      header: "Searchable",
    }),

    {
      id: "tagIds",
      header: "Tags",
      cell: ({ row }) =>
        row.original.tagIds?.length ? row.original.tagIds.join(", ") : "-",
    },

    // ======================================================
    // MEDIA
    // ======================================================

    createDataTableColumn<City>({
      accessorKey: "thumbnail",
      header: "Thumbnail",
    }),

    createDataTableColumn<City>({
      accessorKey: "coverImage",
      header: "Cover Image",
    }),

    createDataTableColumn<City>({
      accessorKey: "bannerImage",
      header: "Banner Image",
    }),

    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },

    createDataTableColumn<City>({
      accessorKey: "video",
      header: "Video",
    }),

    // ======================================================
    // TRAVEL
    // ======================================================

    {
      id: "bestMonths",
      header: "Best Months",
      cell: ({ row }) =>
        row.original.bestMonths?.length
          ? row.original.bestMonths.join(", ")
          : "-",
    },

    {
      id: "rainyMonths",
      header: "Rainy Months",
      cell: ({ row }) =>
        row.original.rainyMonths?.length
          ? row.original.rainyMonths.join(", ")
          : "-",
    },

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<City>({
      accessorKey: "verified",
      header: "Verified",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "addresses",
      header: "Addresses",
      cell: ({ row }) => row.original.addresses?.length ?? 0,
    },

    createDataTableColumn<City>({
      accessorKey: "active",
      header: "Active",
    }),

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<City>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<City>({
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
