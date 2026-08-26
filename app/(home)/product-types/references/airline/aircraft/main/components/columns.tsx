"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";
import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";

export function flyAircraftColumns(
  actions: (row: FlyAircraft) => ActionMenuItem<FlyAircraft>[],
): ColumnDef<FlyAircraft>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },

    {
      accessorKey: "manufacturer",
      header: "Manufacturer",
      cell: ({ row }) => row.original.manufacturer ?? "-",
    },

    {
      accessorKey: "model",
      header: "Model",
      cell: ({ row }) => row.original.model ?? "-",
    },

    {
      accessorKey: "code",
      header: "Code",
      cell: ({ row }) => row.original.code ?? "-",
    },

    {
      accessorKey: "registrationNumber",
      header: "Registration Number",
      cell: ({ row }) => row.original.registrationNumber ?? "-",
    },

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

    {
      accessorKey: "active",
      header: "Active",
      cell: ({ row }) => (row.original.active ? "Yes" : "No"),
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
    },

    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: ({ row }) => new Date(row.original.updatedAt).toLocaleString(),
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
