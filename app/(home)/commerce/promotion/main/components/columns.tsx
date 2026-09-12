"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { Promotion } from "@/types/common/commerce/promotion/promotion";

export function promotionColumns(
  actions: (row: Promotion) => ActionMenuItem<Promotion>[],
): ColumnDef<Promotion>[] {
  return [
    createSelectionColumn<Promotion>(),

    createDataTableColumn<Promotion>({
      accessorKey: "id",
      header: "ID",
    }),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Promotion>({
      accessorKey: "code",
      header: "Code",
      cell: (row) => row.code ?? "-",
    }),

    createDataTableColumn<Promotion>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Promotion>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    createDataTableColumn<Promotion>({
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

    createDataTableColumn<Promotion>({
      accessorKey: "status",
      header: "Status",
      cell: (row) => row.status,
    }),

    // ======================================================
    // DATE
    // ======================================================

    createDataTableColumn<Promotion>({
      accessorKey: "startDate",
      header: "Start Date",
      cell: (row) => new Date(row.startDate).toLocaleString(),
    }),

    createDataTableColumn<Promotion>({
      accessorKey: "endDate",
      header: "End Date",
      cell: (row) => new Date(row.endDate).toLocaleString(),
    }),

    // ======================================================
    // USAGE
    // ======================================================

    createDataTableColumn<Promotion>({
      accessorKey: "usageLimit",
      header: "Usage Limit",
      cell: (row) => row.usageLimit ?? "-",
    }),

    createDataTableColumn<Promotion>({
      accessorKey: "usedCount",
      header: "Used Count",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Promotion>({
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
