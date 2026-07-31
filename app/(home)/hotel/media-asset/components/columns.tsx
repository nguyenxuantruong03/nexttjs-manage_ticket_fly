"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { MediaAsset } from "@/types/bookings/hotel/media.type";

export function mediaAssetColumns(
  actions: (row: MediaAsset) => ActionMenuItem<MediaAsset>[],
): ColumnDef<MediaAsset>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "url",
      header: "URL",
    },
    {
      accessorKey: "thumbnailUrl",
      header: "Thumbnail",
      cell: ({ row }) => row.original.thumbnailUrl ?? "-",
    },
    {
      accessorKey: "path",
      header: "Path",
      cell: ({ row }) => row.original.path ?? "-",
    },
    {
      accessorKey: "type",
      header: "Type",
    },

    // ======================================================
    // FILE INFO
    // ======================================================

    {
      accessorKey: "mimeType",
      header: "MIME Type",
      cell: ({ row }) => row.original.mimeType ?? "-",
    },
    {
      accessorKey: "size",
      header: "Size",
      cell: ({ row }) => row.original.size ?? "-",
    },
    {
      accessorKey: "width",
      header: "Width",
      cell: ({ row }) => row.original.width ?? "-",
    },
    {
      accessorKey: "height",
      header: "Height",
      cell: ({ row }) => row.original.height ?? "-",
    },
    {
      accessorKey: "duration",
      header: "Duration",
      cell: ({ row }) => row.original.duration ?? "-",
    },

    // ======================================================
    // METADATA
    // ======================================================

    {
      accessorKey: "alt",
      header: "Alt",
      cell: ({ row }) => row.original.alt ?? "-",
    },
    {
      accessorKey: "caption",
      header: "Caption",
      cell: ({ row }) => row.original.caption ?? "-",
    },

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "hotelMedias",
      header: "Hotels",
      cell: ({ row }) => row.original.hotelMedias.length,
    },
    {
      id: "roomMedias",
      header: "Rooms",
      cell: ({ row }) => row.original.roomMedias.length,
    },
    {
      id: "facilityMedias",
      header: "Facilities",
      cell: ({ row }) => row.original.facilityMedias.length,
    },
    {
      id: "awardMedias",
      header: "Awards",
      cell: ({ row }) => row.original.awardMedias.length,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => row.original.createdAt.toLocaleString(),
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: ({ row }) => row.original.updatedAt.toLocaleString(),
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
