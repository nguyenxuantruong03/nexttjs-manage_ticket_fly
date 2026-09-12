"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

export function airportTransferColumns(
  actions: (row: AirportTransfer) => ActionMenuItem<AirportTransfer>[],
): ColumnDef<AirportTransfer>[] {
  return [
    createSelectionColumn<AirportTransfer>(),

    createDataTableColumn<AirportTransfer>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<AirportTransfer>({
      accessorKey: "name",
      header: "Transfer Name",
    }),

    createDataTableColumn<AirportTransfer>({
      accessorKey: "providerBooking",
      header: "Provider",
      cell: (row) => row.providerBooking?.displayName ?? "-",
    }),

    createDataTableColumn<AirportTransfer>({
      accessorKey: "routes",
      header: "Departure",
      cell: (row) =>
        row.routes?.length
          ? row.routes.map((route) => route.departureAddress).join(", ")
          : "-",
    }),

    createDataTableColumn<AirportTransfer>({
      accessorKey: "routes",
      header: "Arrival",
      cell: (row) =>
        row.routes?.length
          ? row.routes.map((route) => route.arrivalAddress).join(", ")
          : "-",
    }),

    createDataTableColumn<AirportTransfer>({
      accessorKey: "vehicle",
      header: "Vehicle",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((item) => item.name).join(", ")
          : "-",
    }),

    createDataTableColumn<AirportTransfer>({
      accessorKey: "price",
      header: "From Price",
      cell: (row) => row.price?.fromPrice ?? "-",
    }),

    createDataTableColumn<AirportTransfer>({
      accessorKey: "active",
      header: "Active",
    }),

    createDataTableColumn<AirportTransfer>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
