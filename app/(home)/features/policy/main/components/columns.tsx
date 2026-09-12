"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { Policy } from "@/types/common/features/policy/policy";

export function policyColumns(
  actions: (row: Policy) => ActionMenuItem<Policy>[],
): ColumnDef<Policy>[] {
  return [
    createSelectionColumn<Policy>(),

    createDataTableColumn<Policy>({
      accessorKey: "id",
      header: "ID",
    }),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Policy>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Policy>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<Policy>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<Policy>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // POLICY TYPE
    // ======================================================

    createDataTableColumn<Policy>({
      accessorKey: "type",
      header: "Policy Type",
      cell: (row) => row.type?.name ?? "-",
    }),

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    createDataTableColumn<Policy>({
      accessorKey: "bookingTypes",
      header: "Booking Types",
      cell: (row) => {
        const bookingTypes = row.bookingTypes;

        if (!bookingTypes?.length) {
          return "-";
        }

        return bookingTypes.map((item) => item.name).join(", ");
      },
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Policy>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<Policy>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Policy>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<Policy>({
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
