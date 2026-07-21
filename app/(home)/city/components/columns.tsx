"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { City } from "@/types/bookings/location/city";
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
      accessorKey: "slug",
      header: "Slug",
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
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => {
        return row.original.country?.name ?? "-";
      },
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
      header: "Capital City",
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
      accessorKey: "timezone",
      header: "Timezone",
    },

    {
      accessorKey: "utcOffset",
      header: "UTC Offset",
    },

    // ======================================================
    // SEARCH
    // ======================================================

    {
      accessorKey: "priority",
      header: "Priority",
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
      accessorKey: "aliases",
      header: "Aliases",
    },

    {
      accessorKey: "keywords",
      header: "Keywords",
    },

    {
      accessorKey: "tags",
      header: "Tags",
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
      accessorKey: "images",
      header: "Images",
      cell: ({ row }) => {
        return row.original.images?.length ?? 0;
      },
    },

    {
      accessorKey: "video",
      header: "Video",
    },

    // ======================================================
    // TRAVEL
    // ======================================================

    {
      accessorKey: "bestMonths",
      header: "Best Months",
    },

    {
      accessorKey: "rainyMonths",
      header: "Rainy Months",
    },

    // ======================================================
    // SEO
    // ======================================================

    {
      accessorKey: "seoTitle",
      header: "SEO Title",
    },

    {
      accessorKey: "seoDescription",
      header: "SEO Description",
    },

    {
      accessorKey: "seoKeywords",
      header: "SEO Keywords",
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
      accessorKey: "addresses",
      header: "Addresses",
      cell: ({ row }) => {
        return row.original.addresses?.length ?? 0;
      },
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
    },

    {
      accessorKey: "updatedAt",
      header: "Updated At",
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
