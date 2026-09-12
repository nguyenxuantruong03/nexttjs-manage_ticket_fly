"use client";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { District } from "@/types/location/district";

import { ColumnDef } from "@tanstack/react-table";

export function districtColumns(
  actions: (row: District) => ActionMenuItem<District>[],
): ColumnDef<District>[] {
  return [
    createSelectionColumn<District>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<District>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<District>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<District>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<District>({
      accessorKey: "nativeName",
      header: "Native Name",
    }),

    // ======================================================
    // RELATION
    // ======================================================

    createDataTableColumn<District>({
      accessorKey: "city",
      header: "City",
      cell: (row) => row.city?.name ?? "-",
    }),

    // ======================================================
    // LOCATION
    // ======================================================

    createDataTableColumn<District>({
      accessorKey: "latitude",
      header: "Latitude",
    }),

    createDataTableColumn<District>({
      accessorKey: "longitude",
      header: "Longitude",
    }),

    createDataTableColumn<District>({
      accessorKey: "verified",
      header: "Verified",
    }),

    createDataTableColumn<District>({
      accessorKey: "active",
      header: "Active",
    }),

    // ======================================================
    // MEDIA
    // ======================================================

    createDataTableColumn<District>({
      accessorKey: "thumbnail",
      header: "Thumbnail",
    }),

    createDataTableColumn<District>({
      accessorKey: "coverImage",
      header: "Cover Image",
    }),

    createDataTableColumn<District>({
      accessorKey: "bannerImage",
      header: "Banner Image",
    }),

    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },

    createDataTableColumn<District>({
      accessorKey: "video",
      header: "Video",
    }),

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<District>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<District>({
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
