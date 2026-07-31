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
      id: "timezone",
      header: "Timezone",
      accessorFn: (row) => row.timezone?.name ?? "-",
    },
    {
      id: "languages",
      header: "Languages",
      accessorFn: (row) => row.languageIds?.join(", ") ?? "-",
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
      accessorKey: "searchPriority",
      header: "Search Priority",
    },
    {
      accessorKey: "featured",
      header: "Featured",
    },
    {
      accessorKey: "searchable",
      header: "Searchable",
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
      id: "cities",
      header: "Cities",
      accessorFn: (row) => row.cities?.length ?? 0,
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

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
