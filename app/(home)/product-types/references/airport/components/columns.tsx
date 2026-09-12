"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyAirport } from "@/types/product-types/references/airport/airport.types";

export function flyAirportColumns(
  actions: (row: FlyAirport) => ActionMenuItem<FlyAirport>[],
): ColumnDef<FlyAirport>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyAirport>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyAirport>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyAirport>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlyAirport>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<FlyAirport>({
      accessorKey: "iataCode",
      header: "IATA",
    }),

    createDataTableColumn<FlyAirport>({
      accessorKey: "icaoCode",
      header: "ICAO",
    }),

    // ======================================================
    // AIRPORT
    // ======================================================

    createDataTableColumn<FlyAirport>({
      accessorKey: "terminalCount",
      header: "Terminals",
    }),

    createDataTableColumn<FlyAirport>({
      accessorKey: "lat",
      header: "Latitude",
    }),

    createDataTableColumn<FlyAirport>({
      accessorKey: "lng",
      header: "Longitude",
    }),

    // ======================================================
    // ADDRESS
    // ======================================================

    {
      id: "address",
      header: "Address",
      cell: ({ row }) => {
        const address = row.original.address;

        if (!address) return "-";

        return [
          address.name,
          address.houseNumber,
          address.street,
          address.ward?.name,
          address.district?.name,
          address.city?.name,
          address.country?.name,
          address.postcode,
        ]
          .filter(Boolean)
          .join(", ");
      },
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<FlyAirport>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<FlyAirport>({
      accessorKey: "updatedAt",
      header: "Updated At",
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
