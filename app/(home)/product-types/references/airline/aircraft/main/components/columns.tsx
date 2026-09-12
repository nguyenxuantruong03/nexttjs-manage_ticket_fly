"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";

export function flyAircraftColumns(
  actions: (row: FlyAircraft) => ActionMenuItem<FlyAircraft>[],
): ColumnDef<FlyAircraft>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyAircraft>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyAircraft>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyAircraft>({
      accessorKey: "manufacturer",
      header: "Manufacturer",
      cell: (row) => row.manufacturer ?? "-",
    }),

    createDataTableColumn<FlyAircraft>({
      accessorKey: "model",
      header: "Model",
      cell: (row) => row.model ?? "-",
    }),

    createDataTableColumn<FlyAircraft>({
      accessorKey: "code",
      header: "Code",
      cell: (row) => row.code ?? "-",
    }),

    createDataTableColumn<FlyAircraft>({
      accessorKey: "registrationNumber",
      header: "Registration Number",
      cell: (row) => row.registrationNumber ?? "-",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "airline",
      header: "Airline",
      cell: ({ row }) => row.original.airline?.name ?? "-",
    },

    {
      id: "trips",
      header: "Trips",
      cell: ({ row }) => row.original.trips?.length ?? 0,
    },

    {
      id: "cabins",
      header: "Cabins",
      cell: ({ row }) => row.original.cabins?.length ?? 0,
    },

    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },

    {
      id: "facilities",
      header: "Facilities",
      cell: ({ row }) => row.original.facilities?.length ?? 0,
    },

    {
      id: "seatMap",
      header: "Seat Map",
      cell: ({ row }) => (row.original.seatMap ? "Yes" : "No"),
    },

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlyAircraft>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<FlyAircraft>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<FlyAircraft>({
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
