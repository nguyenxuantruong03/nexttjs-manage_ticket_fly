"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { City } from "@/types/location/city";
import { ColumnDef } from "@tanstack/react-table";

export function cityColumns(
  actions: (row: City) => ActionMenuItem<City>[],
): ColumnDef<City>[] {
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
      accessorKey: "nativeName",
      header: "Native Name",
    },
    {
      accessorKey: "code",
      header: "Code",
    },
    {
      accessorKey: "iataCode",
      header: "IATA Code",
    },
    {
      accessorKey: "subtitle",
      header: "Subtitle",
    },
    {
      accessorKey: "shortDescription",
      header: "Short Description",
    },
    {
      accessorKey: "description",
      header: "Description",
    },

    // ======================================================
    // COUNTRY
    // ======================================================

    {
      accessorKey: "countryId",
      header: "Country ID",
    },
    {
      id: "country",
      header: "Country",
      cell: ({ row }) => row.original.country?.name ?? "-",
    },
    {
      accessorKey: "administrativeArea",
      header: "Administrative Area",
    },
    {
      accessorKey: "region",
      header: "Region",
    },
    {
      accessorKey: "isCapital",
      header: "Capital",
    },

    // ======================================================
    // LOCATION
    // ======================================================

    {
      accessorKey: "latitude",
      header: "Latitude",
    },
    {
      accessorKey: "longitude",
      header: "Longitude",
    },
    {
      accessorKey: "elevation",
      header: "Elevation",
    },
    {
      id: "timezone",
      header: "Timezone",
      cell: ({ row }) => row.original.timezone?.name ?? "-",
    },

    // ======================================================
    // SEARCH
    // ======================================================

    {
      accessorKey: "searchPriority",
      header: "Search Priority",
    },
    {
      accessorKey: "displayOrder",
      header: "Display Order",
    },
    {
      accessorKey: "popularityScore",
      header: "Popularity Score",
    },
    {
      accessorKey: "featured",
      header: "Featured",
    },
    {
      accessorKey: "popular",
      header: "Popular",
    },
    {
      accessorKey: "searchable",
      header: "Searchable",
    },
    {
      id: "tagIds",
      header: "Tags",
      cell: ({ row }) =>
        row.original.tagIds?.length ? row.original.tagIds.join(", ") : "-",
    },

    // ======================================================
    // MEDIA
    // ======================================================

    {
      accessorKey: "thumbnail",
      header: "Thumbnail",
    },
    {
      accessorKey: "coverImage",
      header: "Cover Image",
    },
    {
      accessorKey: "bannerImage",
      header: "Banner Image",
    },
    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },
    {
      accessorKey: "video",
      header: "Video",
    },

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

    {
      accessorKey: "verified",
      header: "Verified",
    },
    {
      accessorKey: "status",
      header: "Status",
    },

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "addresses",
      header: "Addresses",
      cell: ({ row }) => row.original.addresses?.length ?? 0,
    },

    {
      accessorKey: "active",
      header: "Active",
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
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
