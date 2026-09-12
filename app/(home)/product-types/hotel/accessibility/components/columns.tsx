"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { Accessibility } from "@/types/product-types/hotel/hotel-detail";

export function accessibilityColumns(
  actions: (row: Accessibility) => ActionMenuItem<Accessibility>[],
): ColumnDef<Accessibility>[] {
  return [
    createSelectionColumn<Accessibility>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Accessibility>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Accessibility>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Accessibility>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // ACTIONS
    // ======================================================

    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <RowActions row={row.original} actions={actions} />
      ),
    },
  ];
}