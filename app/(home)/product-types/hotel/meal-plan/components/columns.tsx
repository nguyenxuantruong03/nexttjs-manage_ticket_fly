"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { MealPlan } from "@/types/product-types/hotel/pricing/rate-plan.types";

export function mealPlanColumns(
  actions: (row: MealPlan) => ActionMenuItem<MealPlan>[],
): ColumnDef<MealPlan>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<MealPlan>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<MealPlan>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<MealPlan>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<MealPlan>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<MealPlan>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // SETTINGS
    // ======================================================

    createDataTableColumn<MealPlan>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<MealPlan>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<MealPlan>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => row.createdAt.toLocaleString(),
    }),

    createDataTableColumn<MealPlan>({
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
