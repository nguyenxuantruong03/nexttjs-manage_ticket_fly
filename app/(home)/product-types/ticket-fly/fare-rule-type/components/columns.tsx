"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";

export function flyFareRuleTypeColumns(
  actions: (row: FlyFareRuleType) => ActionMenuItem<FlyFareRuleType>[],
): ColumnDef<FlyFareRuleType>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyFareRuleType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyFareRuleType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyFareRuleType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlyFareRuleType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<FlyFareRuleType>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlyFareRuleType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    createDataTableColumn<FlyFareRuleType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "rules",
      header: "Rules",
      cell: ({ row }) => row.original.rules?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<FlyFareRuleType>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) =>
        row.createdAt ? new Date(row.createdAt).toLocaleString() : "-",
    }),

    createDataTableColumn<FlyFareRuleType>({
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
