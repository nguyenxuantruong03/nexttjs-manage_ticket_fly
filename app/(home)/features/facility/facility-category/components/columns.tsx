"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";

export function facilityCategoryColumns(
  actions: (row: FacilityCategory) => ActionMenuItem<FacilityCategory>[],
): ColumnDef<FacilityCategory>[] {
  return [
    createSelectionColumn<FacilityCategory>(),

    createDataTableColumn<FacilityCategory>({
      accessorKey: "id",
      header: "ID",
    }),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FacilityCategory>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FacilityCategory>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<FacilityCategory>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<FacilityCategory>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FacilityCategory>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<FacilityCategory>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<FacilityCategory>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
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
