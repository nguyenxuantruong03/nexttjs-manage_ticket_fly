"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";

export function flyFareRuleTypeColumns(
  actions: (row: FlyFareRuleType) => ActionMenuItem<FlyFareRuleType>[],
): ColumnDef<FlyFareRuleType>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },

    {
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => row.original.description ?? "-",
    },

    {
      accessorKey: "icon",
      header: "Icon",
      cell: ({ row }) => row.original.icon ?? "-",
    },

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "sortOrder",
      header: "Sort Order",
    },

    {
      accessorKey: "active",
      header: "Active",
      cell: ({ row }) => (row.original.active ? "Yes" : "No"),
    },

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "rules",
      header: "Rules",
      cell: ({ row }) => row.original.rules?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
    },

    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: ({ row }) => new Date(row.original.updatedAt).toLocaleString(),
    },

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
