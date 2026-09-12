"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { PolicyType } from "@/types/common/features/policy/policy-type";

export function policyTypeColumns(
  actions: (row: PolicyType) => ActionMenuItem<PolicyType>[],
): ColumnDef<PolicyType>[] {
  return [
    createSelectionColumn<PolicyType>(),

    createDataTableColumn<PolicyType>({
      accessorKey: "id",
      header: "ID",
    }),

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    createDataTableColumn<PolicyType>({
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
    // BASIC
    // ======================================================

    createDataTableColumn<PolicyType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<PolicyType>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<PolicyType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<PolicyType>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<PolicyType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<PolicyType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<PolicyType>({
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
