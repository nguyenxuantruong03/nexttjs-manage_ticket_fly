"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { BedType } from "@/types/product-types/hotel/room/room.types";

export function bedTypeColumns(
  actions: (row: BedType) => ActionMenuItem<BedType>[],
): ColumnDef<BedType>[] {
  return [
    createSelectionColumn<BedType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<BedType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<BedType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<BedType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<BedType>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // SETTINGS
    // ======================================================

    createDataTableColumn<BedType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<BedType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<BedType>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => row.createdAt.toLocaleString(),
    }),

    createDataTableColumn<BedType>({
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (row) => row.updatedAt.toLocaleString(),
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
