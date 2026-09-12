"use client";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { Language } from "@/types/location/language";

import { ColumnDef } from "@tanstack/react-table";

export function languageColumns(
  actions: (row: Language) => ActionMenuItem<Language>[],
): ColumnDef<Language>[] {
  return [
    createSelectionColumn<Language>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Language>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Language>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<Language>({
      accessorKey: "iso3",
      header: "ISO 3",
    }),

    createDataTableColumn<Language>({
      accessorKey: "locale",
      header: "Locale",
    }),

    createDataTableColumn<Language>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Language>({
      accessorKey: "nativeName",
      header: "Native Name",
    }),

    createDataTableColumn<Language>({
      accessorKey: "flagEmoji",
      header: "Flag",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Language>({
      accessorKey: "rtl",
      header: "RTL",
    }),

    createDataTableColumn<Language>({
      accessorKey: "active",
      header: "Active",
    }),

    createDataTableColumn<Language>({
      accessorKey: "default",
      header: "Default",
    }),

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<Language>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<Language>({
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
