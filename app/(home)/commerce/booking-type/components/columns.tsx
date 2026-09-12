"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { BookingType } from "@/types/common/commerce/booking-type";

export function bookingTypeColumns(
  actions: (row: BookingType) => ActionMenuItem<BookingType>[],
): ColumnDef<BookingType>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<BookingType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<BookingType>({
      accessorKey: "id",
      header: "ID",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "ID",
      },
      summary: {
        type: "count",
        label: "Số dòng",
      },
    }),

    createDataTableColumn<BookingType>({
      accessorKey: "code",
      header: "Code",
      meta: {
        exportLabel: "Code",
        filterLabel: "Code",
      },
    }),

    createDataTableColumn<BookingType>({
      accessorKey: "name",
      header: "Name",
      meta: {
        exportLabel: "Name",
        filterLabel: "Name",
      },
    }),

    createDataTableColumn<BookingType>({
      accessorKey: "description",
      header: "Description",
      meta: {
        exportLabel: "Description",
        filterLabel: "Description",
      },
      cell: (row) => row.description ?? "-",
      exportValue: (row) => row.description ?? "",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<BookingType>({
      accessorKey: "active",
      header: "Active",
      meta: {
        filterVariant: "boolean",
        exportLabel: "Active",
      },
      cell: (row) => (row.active ? "Yes" : "No"),
      exportValue: (row) => row.active,
    }),

    createDataTableColumn<BookingType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "Sort Order",
      },
      summary: {
        type: "sum",
        value: (row) => row.sortOrder ?? 0,
        label: "Tổng thứ tự",
      },
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<BookingType>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Created At",
      },
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    // ======================================================
    // ACTIONS
    // ======================================================

    {
      id: "actions",
      size: 56,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      enablePinning: false,
      enableResizing: false,
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
