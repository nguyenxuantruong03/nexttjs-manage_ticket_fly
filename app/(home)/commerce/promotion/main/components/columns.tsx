"use client";

import { ColumnDef } from "@tanstack/react-table";

import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { Promotion } from "@/types/common/commerce/promotion/promotion";

export function promotionColumns(
  actions: (row: Promotion) => ActionMenuItem<Promotion>[],
): ColumnDef<Promotion>[] {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },

    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "code",
      header: "Code",
      cell: ({ row }) => row.original.code ?? "-",
    },

    {
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => row.original.description ?? "-",
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
    // STATUS
    // ======================================================

    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => row.original.status,
    },

    // ======================================================
    // DATE
    // ======================================================

    {
      accessorKey: "startDate",
      header: "Start Date",
      cell: ({ row }) => new Date(row.original.startDate).toLocaleString(),
    },

    {
      accessorKey: "endDate",
      header: "End Date",
      cell: ({ row }) => new Date(row.original.endDate).toLocaleString(),
    },

    // ======================================================
    // USAGE
    // ======================================================

    {
      accessorKey: "usageLimit",
      header: "Usage Limit",
      cell: ({ row }) => row.original.usageLimit ?? "-",
    },

    {
      accessorKey: "usedCount",
      header: "Used Count",
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
