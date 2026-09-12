"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";

export function yachtConditionColumns(
  actions: (row: YachtCondition) => ActionMenuItem<YachtCondition>[],
): ColumnDef<YachtCondition>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<YachtCondition>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<YachtCondition>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<YachtCondition>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<YachtCondition>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<YachtCondition>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<YachtCondition>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "vehicles",
      header: "Vehicles",
      cell: ({ row }) => row.original.vehicles?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<YachtCondition>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) =>
        row.createdAt ? new Date(row.createdAt).toLocaleString() : "-",
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
