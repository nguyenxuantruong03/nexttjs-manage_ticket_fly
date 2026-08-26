"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";
import { PlaceType } from "@/types/location/place/place-type.type";

import { ColumnDef } from "@tanstack/react-table";

export function placeTypeColumns(
  actions: (row: PlaceType) => ActionMenuItem<PlaceType>[],
): ColumnDef<PlaceType>[] {
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
      accessorKey: "code",
      header: "Code",
    },

    {
      accessorKey: "slug",
      header: "Slug",
    },

    {
      accessorKey: "description",
      header: "Description",
    },

    // ======================================================
    // MEDIA
    // ======================================================

    {
      accessorKey: "icon",
      header: "Icon",
    },

    {
      accessorKey: "thumbnail",
      header: "Thumbnail",
    },

    // ======================================================
    // DISPLAY
    // ======================================================

    {
      accessorKey: "sortOrder",
      header: "Sort Order",
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
      id: "places",
      header: "Places",
      accessorFn: (row) => row.places?.length ?? 0,
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
