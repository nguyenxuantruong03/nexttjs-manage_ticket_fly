"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

export function flyAircraftTypeColumns(
  actions: (row: FlyAircraftType) => ActionMenuItem<FlyAircraftType>[],
): ColumnDef<FlyAircraftType>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyAircraftType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyAircraftType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyAircraftType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlyAircraftType>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<FlyAircraftType>({
      accessorKey: "manufacturer",
      header: "Manufacturer",
      cell: (row) => row.manufacturer ?? "-",
    }),

    createDataTableColumn<FlyAircraftType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlyAircraftType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<FlyAircraftType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "qualifications",
      header: "Qualifications",
      cell: ({ row }) => row.original.qualifications?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<FlyAircraftType>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<FlyAircraftType>({
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
