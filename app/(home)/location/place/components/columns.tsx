"use client";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { Place } from "@/types/location/place/place";

import { ColumnDef } from "@tanstack/react-table";

export function placeColumns(
  actions: (row: Place) => ActionMenuItem<Place>[],
): ColumnDef<Place>[] {
  return [
    createSelectionColumn<Place>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Place>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Place>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Place>({
      accessorKey: "nativeName",
      header: "Native Name",
    }),

    createDataTableColumn<Place>({
      accessorKey: "subtitle",
      header: "Subtitle",
    }),

    createDataTableColumn<Place>({
      accessorKey: "shortDescription",
      header: "Short Description",
    }),

    createDataTableColumn<Place>({
      accessorKey: "description",
      header: "Description",
    }),

    // ======================================================
    // LOCATION
    // ======================================================

    {
      id: "address",
      header: "Address",
      accessorFn: (row) =>
        row.address
          ? `${row.address.street ?? ""} ${row.address.city?.name ?? ""}`.trim()
          : "-",
    },

    createDataTableColumn<Place>({
      accessorKey: "latitude",
      header: "Latitude",
    }),

    createDataTableColumn<Place>({
      accessorKey: "longitude",
      header: "Longitude",
    }),

    // ======================================================
    // PLACE TYPE
    // ======================================================

    {
      id: "placeType",
      header: "Place Type",
      accessorFn: (row) => row.placeType?.name ?? "-",
    },

    // ======================================================
    // SEARCH / FEATURE
    // ======================================================

    createDataTableColumn<Place>({
      accessorKey: "featured",
      header: "Featured",
    }),

    createDataTableColumn<Place>({
      accessorKey: "searchable",
      header: "Searchable",
    }),

    createDataTableColumn<Place>({
      accessorKey: "searchPriority",
      header: "Search Priority",
    }),

    // ======================================================
    // MEDIA
    // ======================================================

    createDataTableColumn<Place>({
      accessorKey: "thumbnail",
      header: "Thumbnail",
    }),

    createDataTableColumn<Place>({
      accessorKey: "coverImage",
      header: "Cover Image",
    }),

    {
      id: "images",
      header: "Images",
      accessorFn: (row) => row.images?.length ?? 0,
    },

    // ======================================================
    // TAGS
    // ======================================================

    {
      id: "tags",
      header: "Tags",
      accessorFn: (row) =>
        row.tags?.length ? row.tags.map((tag) => tag.name).join(", ") : "-",
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
      id: "keywords",
      header: "Keywords",
      accessorFn: (row) =>
        row.keywords?.length ? row.keywords.join(", ") : "-",
    },

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Place>({
      accessorKey: "verified",
      header: "Verified",
    }),

    createDataTableColumn<Place>({
      accessorKey: "active",
      header: "Active",
    }),

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<Place>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<Place>({
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
