"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyDelayReason } from "@/types/product-types/ticket-fly/fly-delay-reason";

export function flyDelayReasonColumns(
  actions: (row: FlyDelayReason) => ActionMenuItem<FlyDelayReason>[],
): ColumnDef<FlyDelayReason>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyDelayReason>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyDelayReason>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyDelayReason>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlyDelayReason>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<FlyDelayReason>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlyDelayReason>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    createDataTableColumn<FlyDelayReason>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "delays",
      header: "Delays",
      cell: ({ row }) => row.original.delays?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<FlyDelayReason>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) =>
        row.createdAt ? new Date(row.createdAt).toLocaleString() : "-",
    }),

    createDataTableColumn<FlyDelayReason>({
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
