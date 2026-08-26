"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Place } from "@/types/location/place/place";
import { ColumnDef } from "@tanstack/react-table";

export function placeColumns(
  actions: (row: Place) => ActionMenuItem<Place>[],
): ColumnDef<Place>[] {
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
    // LOCATION
    // ======================================================

    {
      id: "address",
      header: "Address",
      accessorFn: (row) =>
        row.address
          ? `${row.address.street ?? ""} ${
              row.address.city?.name ?? ""
            }`.trim()
          : "-",
    },

    {
      accessorKey: "latitude",
      header: "Latitude",
    },

    {
      accessorKey: "longitude",
      header: "Longitude",
    },

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

    {
      accessorKey: "featured",
      header: "Featured",
    },

    {
      accessorKey: "searchable",
      header: "Searchable",
    },

    {
      accessorKey: "searchPriority",
      header: "Search Priority",
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
        row.tags?.length
          ? row.tags.map((tag) => tag.name).join(", ")
          : "-",
    },

    // ======================================================
    // SEARCH
    // ======================================================

    {
      id: "aliases",
      header: "Aliases",
      accessorFn: (row) =>
        row.aliases?.length ? row.aliases.join(", ") : "-",
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

    {
      accessorKey: "verified",
      header: "Verified",
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
      cell: ({ row }) => (
        <RowActions
          row={row.original}
          actions={actions}
        />
      ),
    },
  ];
}