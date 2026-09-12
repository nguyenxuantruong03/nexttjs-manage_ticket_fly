"use client";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { PlaceType } from "@/types/location/place/place-type.type";

import { ColumnDef } from "@tanstack/react-table";

export function placeTypeColumns(
  actions: (row: PlaceType) => ActionMenuItem<PlaceType>[],
): ColumnDef<PlaceType>[] {
  return [
    createSelectionColumn<PlaceType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<PlaceType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<PlaceType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<PlaceType>({
      accessorKey: "nativeName",
      header: "Native Name",
    }),

    createDataTableColumn<PlaceType>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<PlaceType>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<PlaceType>({
      accessorKey: "description",
      header: "Description",
    }),

    // ======================================================
    // MEDIA
    // ======================================================

    createDataTableColumn<PlaceType>({
      accessorKey: "icon",
      header: "Icon",
    }),

    createDataTableColumn<PlaceType>({
      accessorKey: "thumbnail",
      header: "Thumbnail",
    }),

    // ======================================================
    // DISPLAY
    // ======================================================

    createDataTableColumn<PlaceType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<PlaceType>({
      accessorKey: "active",
      header: "Active",
    }),

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

    createDataTableColumn<PlaceType>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<PlaceType>({
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
