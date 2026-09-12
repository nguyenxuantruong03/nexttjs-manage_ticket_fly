"use client";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { Country } from "@/types/location/country/country";

import { ColumnDef } from "@tanstack/react-table";

export function countryColumns(
  actions: (row: Country) => ActionMenuItem<Country>[],
): ColumnDef<Country>[] {
  return [
    createSelectionColumn<Country>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Country>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Country>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Country>({
      accessorKey: "officialName",
      header: "Official Name",
    }),

    createDataTableColumn<Country>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<Country>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<Country>({
      accessorKey: "iso2",
      header: "ISO 2",
    }),

    createDataTableColumn<Country>({
      accessorKey: "iso3",
      header: "ISO 3",
    }),

    createDataTableColumn<Country>({
      accessorKey: "phoneCode",
      header: "Phone Code",
    }),

    createDataTableColumn<Country>({
      accessorKey: "capital",
      header: "Capital",
    }),

    // ======================================================
    // LOCATION
    // ======================================================

    createDataTableColumn<Country>({
      accessorKey: "continentId",
      header: "Continent ID",
    }),

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

    createDataTableColumn<Country>({
      accessorKey: "flag",
      header: "Flag",
    }),

    createDataTableColumn<Country>({
      accessorKey: "thumbnail",
      header: "Thumbnail",
    }),

    createDataTableColumn<Country>({
      accessorKey: "coverImage",
      header: "Cover Image",
    }),

    createDataTableColumn<Country>({
      accessorKey: "bannerImage",
      header: "Banner Image",
    }),

    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },

    createDataTableColumn<Country>({
      accessorKey: "video",
      header: "Video",
    }),

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

    createDataTableColumn<Country>({
      accessorKey: "searchText",
      header: "Search Text",
    }),

    createDataTableColumn<Country>({
      accessorKey: "searchPriority",
      header: "Search Priority",
    }),

    createDataTableColumn<Country>({
      accessorKey: "featured",
      header: "Featured",
    }),

    createDataTableColumn<Country>({
      accessorKey: "searchable",
      header: "Searchable",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Country>({
      accessorKey: "active",
      header: "Active",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "currency",
      header: "Currency",
      accessorFn: (row) => row.currency?.code ?? "-",
    },

    createDataTableColumn<Country>({
      accessorKey: "currencyId",
      header: "Currency ID",
    }),

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

    createDataTableColumn<Country>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<Country>({
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
