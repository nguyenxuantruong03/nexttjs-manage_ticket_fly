"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { DiningMealType } from "@/types/product-types/hotel/service/dinner-option.type";

export function diningMealTypeColumns(
  actions: (row: DiningMealType) => ActionMenuItem<DiningMealType>[],
): ColumnDef<DiningMealType>[] {
  return [
    createSelectionColumn<DiningMealType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<DiningMealType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<DiningMealType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<DiningMealType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<DiningMealType>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "diningOptions",
      header: "Dining Options",
      cell: ({ row }) => row.original.diningOptions.length,
    },

    // ======================================================
    // SETTINGS
    // ======================================================

    createDataTableColumn<DiningMealType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<DiningMealType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<DiningMealType>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => row.createdAt.toLocaleString(),
    }),

    createDataTableColumn<DiningMealType>({
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
