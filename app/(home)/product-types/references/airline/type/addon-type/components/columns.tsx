"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyAddonType } from "@/types/product-types/references/airline/fly-addon-type";

export function flyAddonTypeColumns(
  actions: (row: FlyAddonType) => ActionMenuItem<FlyAddonType>[],
): ColumnDef<FlyAddonType>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyAddonType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyAddonType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyAddonType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlyAddonType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<FlyAddonType>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlyAddonType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    createDataTableColumn<FlyAddonType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "addons",
      header: "Addons",
      cell: ({ row }) => row.original.addons?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<FlyAddonType>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<FlyAddonType>({
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
