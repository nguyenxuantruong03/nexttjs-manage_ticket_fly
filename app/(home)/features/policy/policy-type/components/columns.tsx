"use client";

import { ColumnDef } from "@tanstack/react-table";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { PolicyType } from "@/types/common/features/policy/policy-type";

export function policyTypeColumns(
  actions: (row: PolicyType) => ActionMenuItem<PolicyType>[],
): ColumnDef<PolicyType>[] {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    {
      accessorKey: "bookingTypes",
      header: "Booking Types",

      cell: ({ row }) => {
        const bookingTypes = row.original.bookingTypes;

        if (!bookingTypes?.length) {
          return "-";
        }

        return bookingTypes.map((item) => item.name).join(", ");
      },
    },

    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "slug",
      header: "Slug",
    },

    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => row.original.description ?? "-",
    },

    {
      accessorKey: "icon",
      header: "Icon",
      cell: ({ row }) => row.original.icon ?? "-",
    },

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "active",
      header: "Active",
      cell: ({ row }) => (row.original.active ? "Yes" : "No"),
    },

    {
      accessorKey: "sortOrder",
      header: "Sort Order",
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
    },

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
