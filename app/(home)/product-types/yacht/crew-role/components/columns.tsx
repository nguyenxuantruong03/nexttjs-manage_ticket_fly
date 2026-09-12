"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";

export function yachtCrewRoleColumns(
  actions: (row: YachtCrewRole) => ActionMenuItem<YachtCrewRole>[],
): ColumnDef<YachtCrewRole>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<YachtCrewRole>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<YachtCrewRole>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<YachtCrewRole>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<YachtCrewRole>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<YachtCrewRole>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<YachtCrewRole>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "crews",
      header: "Crews",
      cell: ({ row }) => row.original.crews?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<YachtCrewRole>({
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
