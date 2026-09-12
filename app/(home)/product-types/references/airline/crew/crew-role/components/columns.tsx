"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";

export function flyCrewRoleColumns(
  actions: (row: FlyCrewRole) => ActionMenuItem<FlyCrewRole>[],
): ColumnDef<FlyCrewRole>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyCrewRole>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyCrewRole>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyCrewRole>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlyCrewRole>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<FlyCrewRole>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<FlyCrewRole>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlyCrewRole>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    createDataTableColumn<FlyCrewRole>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
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
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<FlyCrewRole>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<FlyCrewRole>({
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
