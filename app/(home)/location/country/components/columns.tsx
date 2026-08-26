"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { Country } from "@/types/location/country/country";

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
      accessorKey: "continentId",
      header: "Continent ID",
    },

    {
      id: "continent",
      header: "Continent",
      accessorFn: (row) => row.continent?.name ?? "-",
    },

    {
      id: "timezone",
      header: "Timezone",
      accessorFn: (row) => row.timezone?.name ?? "-",
    },

    {
      id: "languages",
      header: "Languages",
      accessorFn: (row) =>
        row.languages?.length
          ? row.languages.map((language) => language.name).join(", ")
          : "-",
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
    // SEARCH
    // ======================================================

    {
      id: "aliases",
      header: "Aliases",
      accessorFn: (row) => (row.aliases?.length ? row.aliases.join(", ") : "-"),
    },

    {
      id: "tags",
      header: "Tags",
      accessorFn: (row) =>
        row.tags?.length ? row.tags.map((tag) => tag.name).join(", ") : "-",
    },

    {
      id: "keywords",
      header: "Keywords",
      accessorFn: (row) =>
        row.keywords?.length ? row.keywords.join(", ") : "-",
    },

    {
      accessorKey: "searchText",
      header: "Search Text",
    },

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
      id: "currency",
      header: "Currency",
      accessorFn: (row) => row.currency?.code ?? "-",
    },

    {
      accessorKey: "currencyId",
      header: "Currency ID",
    },

    {
      id: "cities",
      header: "Cities",
      accessorFn: (row) => row.cities?.length ?? 0,
    },

    {
      id: "addresses",
      header: "Addresses",
      accessorFn: (row) => row.addresses?.length ?? 0,
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
