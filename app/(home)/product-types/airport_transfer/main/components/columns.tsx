"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

export function airportTransferColumns(
  actions: (row: AirportTransfer) => ActionMenuItem<AirportTransfer>[],
): ColumnDef<AirportTransfer>[] {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },

    {
      accessorKey: "name",
      header: "Transfer Name",
    },

    {
      accessorKey: "providerBooking.displayName",
      header: "Provider",
    },

    {
      accessorKey: "route.departure",
      header: "Departure",
    },

    {
      accessorKey: "route.arrival",
      header: "Arrival",
    },

    {
      accessorKey: "vehicle.name",
      header: "Vehicle",
    },

    {
      accessorKey: "pricing.fromPrice",
      header: "From Price",
    },

    {
      accessorKey: "active",
      header: "Active",
    },

    {
      accessorKey: "createdAt",
      header: "Created At",
    },

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
