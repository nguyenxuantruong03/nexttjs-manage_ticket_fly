"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { DiningServiceType } from "@/types/product-types/hotel/service/dinner-option.type";

export function diningServiceTypeColumns(
  actions: (row: DiningServiceType) => ActionMenuItem<DiningServiceType>[],
): ColumnDef<DiningServiceType>[] {
  return [
    createSelectionColumn<DiningServiceType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<DiningServiceType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<DiningServiceType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<DiningServiceType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<DiningServiceType>({
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

    createDataTableColumn<DiningServiceType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<DiningServiceType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<DiningServiceType>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => row.createdAt.toLocaleString(),
    }),

    createDataTableColumn<DiningServiceType>({
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
