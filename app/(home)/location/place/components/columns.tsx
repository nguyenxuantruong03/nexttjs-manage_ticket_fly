"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Place } from "@/types/bookings/location/place";
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
      accessorKey: "addressId",
      header: "Address ID",
    },
    {
      id: "address",
      header: "Address",
      cell: ({ row }) =>
        row.original.address
          ? `${row.original.address.street ?? ""} ${
              row.original.address.city?.name ?? ""
            }`
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
    // CATEGORY
    // ======================================================

    {
      accessorKey: "type",
      header: "Type",
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
      accessorKey: "popularityScore",
      header: "Popularity Score",
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
      cell: ({ row }) => row.original.images?.length ?? 0,
    },

    // ======================================================
    // TAGS
    // ======================================================

    {
      id: "tagIds",
      header: "Tags",
      cell: ({ row }) =>
        row.original.tagIds?.length ? row.original.tagIds.join(", ") : "-",
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
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
