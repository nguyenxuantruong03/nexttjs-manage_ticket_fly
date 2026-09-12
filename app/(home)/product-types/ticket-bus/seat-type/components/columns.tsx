"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";

export function busSeatTypeColumns(
  actions: (row: BusSeatType) => ActionMenuItem<BusSeatType>[],
): ColumnDef<BusSeatType>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<BusSeatType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<BusSeatType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<BusSeatType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<BusSeatType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<BusSeatType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<BusSeatType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "seats",
      header: "Seats",
      cell: ({ row }) => row.original.seats.length,
    },

    {
      id: "priceBreakdowns",
      header: "Price Breakdowns",
      cell: ({ row }) => row.original.priceBreakdowns.length,
    },

    {
      id: "seatPrices",
      header: "Seat Prices",
      cell: ({ row }) => row.original.seatPrices.length,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<BusSeatType>({
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
