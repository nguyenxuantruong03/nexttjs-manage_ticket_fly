"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Language } from "@/types/bookings/location/language";
import { ColumnDef } from "@tanstack/react-table";

export function languageColumns(
  actions: (row: Language) => ActionMenuItem<Language>[],
): ColumnDef<Language>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },

    {
      accessorKey: "code",
      header: "Code",
    },

    {
      accessorKey: "iso3",
      header: "ISO 3",
    },

    {
      accessorKey: "locale",
      header: "Locale",
    },

    {
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "nativeName",
      header: "Native Name",
    },

    {
      accessorKey: "flagEmoji",
      header: "Flag",
    },

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "rtl",
      header: "RTL",
    },

    {
      accessorKey: "active",
      header: "Active",
    },

    {
      accessorKey: "default",
      header: "Default",
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