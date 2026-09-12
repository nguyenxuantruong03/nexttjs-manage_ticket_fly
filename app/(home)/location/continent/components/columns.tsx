"use client";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { Continent } from "@/types/location/country/continent.type";

import { ColumnDef } from "@tanstack/react-table";

export function continentColumns(
  actions: (row: Continent) => ActionMenuItem<Continent>[],
): ColumnDef<Continent>[] {
  return [
    createSelectionColumn<Continent>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Continent>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Continent>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Continent>({
      accessorKey: "nativeName",
      header: "Native Name",
    }),

    createDataTableColumn<Continent>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<Continent>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<Continent>({
      accessorKey: "description",
      header: "Description",
    }),

    // ======================================================
    // MEDIA
    // ======================================================

    createDataTableColumn<Continent>({
      accessorKey: "thumbnail",
      header: "Thumbnail",
    }),

    createDataTableColumn<Continent>({
      accessorKey: "coverImage",
      header: "Cover Image",
    }),

    // ======================================================
    // DISPLAY
    // ======================================================

    createDataTableColumn<Continent>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Continent>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "countries",
      header: "Countries",
      cell: ({ row }) => row.original.countries?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<Continent>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<Continent>({
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (row) => new Date(row.updatedAt).toLocaleString(),
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
