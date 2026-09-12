"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

export function flyCrewDutyColumns(
  actions: (row: FlyCrewDuty) => ActionMenuItem<FlyCrewDuty>[],
): ColumnDef<FlyCrewDuty>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyCrewDuty>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyCrewDuty>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyCrewDuty>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlyCrewDuty>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<FlyCrewDuty>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlyCrewDuty>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    createDataTableColumn<FlyCrewDuty>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "assignments",
      header: "Assignments",
      cell: ({ row }) => row.original.assignments?.length ?? 0,
    },

    {
      id: "schedules",
      header: "Schedules",
      cell: ({ row }) => row.original.schedules?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<FlyCrewDuty>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<FlyCrewDuty>({
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
