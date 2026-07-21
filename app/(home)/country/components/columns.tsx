"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Country } from "@/types/bookings/location/country";
import { ColumnDef } from "@tanstack/react-table";

export function countryColumns(
  actions: (row: Country) => ActionMenuItem<Country>[],
): ColumnDef<Country>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },

    {
      accessorKey: "code",
      header: "Code",
    },

    {
      accessorKey: "iso2",
      header: "ISO 2",
    },

    {
      accessorKey: "iso3",
      header: "ISO 3",
    },

    {
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "officialName",
      header: "Official Name",
    },

    {
      accessorKey: "slug",
      header: "Slug",
    },

    {
      accessorKey: "phoneCode",
      header: "Phone Code",
    },

    {
      accessorKey: "capital",
      header: "Capital",
    },

    // ======================================================
    // LOCATION
    // ======================================================

    {
      accessorKey: "continent",
      header: "Continent",
    },

    {
      accessorKey: "timezone",
      header: "Timezone",
    },

    {
      accessorKey: "languages",
      header: "Languages",
    },

    // ======================================================
    // MEDIA
    // ======================================================

    {
      accessorKey: "flag",
      header: "Flag",
    },

    {
      accessorKey: "thumbnail",
      header: "Thumbnail",
    },

    {
      accessorKey: "coverImage",
      header: "Cover Image",
    },

    // ======================================================
    // SEARCH
    // ======================================================

    {
      accessorKey: "priority",
      header: "Priority",
    },

    {
      accessorKey: "featured",
      header: "Featured",
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

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "active",
      header: "Active",
    },

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      accessorKey: "cities",
      header: "Cities",
      cell: ({ row }) => {
        return row.original.cities?.length ?? 0;
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
