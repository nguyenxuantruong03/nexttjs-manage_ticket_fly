"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";

export function flyCabinClassColumns(
  actions: (row: FlyCabinClass) => ActionMenuItem<FlyCabinClass>[],
): ColumnDef<FlyCabinClass>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyCabinClass>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyCabinClass>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyCabinClass>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlyCabinClass>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<FlyCabinClass>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlyCabinClass>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    createDataTableColumn<FlyCabinClass>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "cabins",
      header: "Cabins",
      cell: ({ row }) => row.original.cabins?.length ?? 0,
    },

    {
      id: "fares",
      header: "Fares",
      cell: ({ row }) => row.original.fares?.length ?? 0,
    },

    {
      id: "cabinInventories",
      header: "Inventories",
      cell: ({ row }) => row.original.cabinInventories?.length ?? 0,
    },

    {
      id: "overbookingRules",
      header: "Overbooking Rules",
      cell: ({ row }) => row.original.overbookingRules?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<FlyCabinClass>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) =>
        row.createdAt ? new Date(row.createdAt).toLocaleString() : "-",
    }),

    createDataTableColumn<FlyCabinClass>({
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (row) =>
        row.updatedAt ? new Date(row.updatedAt).toLocaleString() : "-",
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
