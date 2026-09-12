"use client";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { Ward } from "@/types/location/ward";

import { ColumnDef } from "@tanstack/react-table";

export function wardColumns(
  actions: (row: Ward) => ActionMenuItem<Ward>[],
): ColumnDef<Ward>[] {
  return [
    createSelectionColumn<Ward>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Ward>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Ward>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<Ward>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Ward>({
      accessorKey: "nativeName",
      header: "Native Name",
    }),

    // ======================================================
    // RELATION
    // ======================================================

    createDataTableColumn<Ward>({
      accessorKey: "district",
      header: "District",
      cell: (row) => row.district?.name ?? "-",
    }),

    // ======================================================
    // LOCATION
    // ======================================================

    createDataTableColumn<Ward>({
      accessorKey: "latitude",
      header: "Latitude",
    }),

    createDataTableColumn<Ward>({
      accessorKey: "longitude",
      header: "Longitude",
    }),

    createDataTableColumn<Ward>({
      accessorKey: "verified",
      header: "Verified",
    }),

    createDataTableColumn<Ward>({
      accessorKey: "active",
      header: "Active",
    }),

    // ======================================================
    // MEDIA
    // ======================================================

    createDataTableColumn<Ward>({
      accessorKey: "thumbnail",
      header: "Thumbnail",
    }),

    createDataTableColumn<Ward>({
      accessorKey: "coverImage",
      header: "Cover Image",
    }),

    createDataTableColumn<Ward>({
      accessorKey: "bannerImage",
      header: "Banner Image",
    }),

    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },

    createDataTableColumn<Ward>({
      accessorKey: "video",
      header: "Video",
    }),

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<Ward>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<Ward>({
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
