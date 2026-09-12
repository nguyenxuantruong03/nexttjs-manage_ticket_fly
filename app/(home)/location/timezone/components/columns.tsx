"use client";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { Timezone } from "@/types/location/timezone";

import { ColumnDef } from "@tanstack/react-table";

export function timezoneColumns(
  actions: (row: Timezone) => ActionMenuItem<Timezone>[],
): ColumnDef<Timezone>[] {
  return [
    createSelectionColumn<Timezone>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Timezone>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Timezone>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Timezone>({
      accessorKey: "displayName",
      header: "Display Name",
    }),

    createDataTableColumn<Timezone>({
      accessorKey: "abbreviation",
      header: "Abbreviation",
    }),

    createDataTableColumn<Timezone>({
      accessorKey: "utcOffset",
      header: "UTC Offset",
    }),

    createDataTableColumn<Timezone>({
      accessorKey: "utcOffsetMinutes",
      header: "UTC Offset (Minutes)",
    }),

    createDataTableColumn<Timezone>({
      accessorKey: "daylightSaving",
      header: "Daylight Saving",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Timezone>({
      accessorKey: "active",
      header: "Active",
    }),

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<Timezone>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<Timezone>({
      accessorKey: "updatedAt",
      header: "Updated At",
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
