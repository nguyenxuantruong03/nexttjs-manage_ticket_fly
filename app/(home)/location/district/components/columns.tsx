"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { District } from "@/types/location/district";
import { ColumnDef } from "@tanstack/react-table";

export function districtColumns(
  actions: (row: District) => ActionMenuItem<District>[],
): ColumnDef<District>[] {
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
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "nativeName",
      header: "Native Name",
    },

    // ======================================================
    // RELATION
    // ======================================================

    {
      accessorKey: "city.name",
      header: "City",
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
      accessorKey: "verified",
      header: "Verified",
    },
    {
      accessorKey: "active",
      header: "Active",
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
