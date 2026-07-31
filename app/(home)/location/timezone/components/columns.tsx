"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Timezone } from "@/types/bookings/location/timezone";
import { ColumnDef } from "@tanstack/react-table";

export function timezoneColumns(
  actions: (row: Timezone) => ActionMenuItem<Timezone>[],
): ColumnDef<Timezone>[] {
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
      accessorKey: "displayName",
      header: "Display Name",
    },

    {
      accessorKey: "abbreviation",
      header: "Abbreviation",
    },

    {
      accessorKey: "utcOffset",
      header: "UTC Offset",
    },

    {
      accessorKey: "utcOffsetMinutes",
      header: "UTC Offset (Minutes)",
    },

    {
      accessorKey: "daylightSaving",
      header: "Daylight Saving",
    },

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "active",
      header: "Active",
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
    },

    {
      accessorKey: "updatedAt",
      header: "Updated At",
    },

    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <RowActions row={row.original} actions={actions} />
      ),
    },
  ];
}