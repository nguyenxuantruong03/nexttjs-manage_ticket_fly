"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { FlyAirport } from "@/types/product-types/references/airport/airport.types";

export function flyAirportColumns(
  actions: (row: FlyAirport) => ActionMenuItem<FlyAirport>[],
): ColumnDef<FlyAirport>[] {
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
      accessorKey: "code",
      header: "Code",
    },
    {
      accessorKey: "iataCode",
      header: "IATA",
    },
    {
      accessorKey: "icaoCode",
      header: "ICAO",
    },

    // ======================================================
    // AIRPORT
    // ======================================================

    {
      accessorKey: "terminalCount",
      header: "Terminals",
    },
    {
      accessorKey: "lat",
      header: "Latitude",
    },
    {
      accessorKey: "lng",
      header: "Longitude",
    },

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

    {
      accessorKey: "createdAt",
      header: "Created At",
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
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
