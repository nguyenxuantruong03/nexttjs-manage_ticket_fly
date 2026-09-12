"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { Sustainability } from "@/types/product-types/hotel/hotel-detail";

export function sustainabilityColumns(
  actions: (row: Sustainability) => ActionMenuItem<Sustainability>[],
): ColumnDef<Sustainability>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<Sustainability>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Sustainability>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Sustainability>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Sustainability>({
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
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
