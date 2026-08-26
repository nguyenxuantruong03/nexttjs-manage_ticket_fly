"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";

export function busSeatTypeColumns(
  actions: (
    row: BusSeatType,
  ) => ActionMenuItem<BusSeatType>[],
): ColumnDef<BusSeatType>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
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
      cell: ({ row }) => (
        <RowActions row={row.original} actions={actions} />
      ),
    },
  ];
}