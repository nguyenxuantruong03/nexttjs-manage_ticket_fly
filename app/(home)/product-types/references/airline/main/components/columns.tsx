"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

export function flyAirlineColumns(
  actions: (row: FlyAirline) => ActionMenuItem<FlyAirline>[],
): ColumnDef<FlyAirline>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyAirline>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyAirline>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyAirline>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlyAirline>({
      accessorKey: "legalName",
      header: "Legal Name",
      cell: (row) => row.legalName ?? "-",
    }),

    createDataTableColumn<FlyAirline>({
      accessorKey: "iataCode",
      header: "IATA",
      cell: (row) => row.iataCode ?? "-",
    }),

    createDataTableColumn<FlyAirline>({
      accessorKey: "icaoCode",
      header: "ICAO",
      cell: (row) => row.icaoCode ?? "-",
    }),

    createDataTableColumn<FlyAirline>({
      accessorKey: "callsign",
      header: "Callsign",
      cell: (row) => row.callsign ?? "-",
    }),

    createDataTableColumn<FlyAirline>({
      accessorKey: "country",
      header: "Country",
      cell: (row) => row.country ?? "-",
    }),

    createDataTableColumn<FlyAirline>({
      accessorKey: "website",
      header: "Website",
      cell: (row) => row.website ?? "-",
    }),

    createDataTableColumn<FlyAirline>({
      accessorKey: "hotline",
      header: "Hotline",
      cell: (row) => row.hotline ?? "-",
    }),

    createDataTableColumn<FlyAirline>({
      accessorKey: "email",
      header: "Email",
      cell: (row) => row.email ?? "-",
    }),

    createDataTableColumn<FlyAirline>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlyAirline>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "aircraft",
      header: "Aircraft",
      cell: ({ row }) => row.original.aircraft?.length ?? 0,
    },

    {
      id: "crew",
      header: "Crew",
      cell: ({ row }) => row.original.crew?.length ?? 0,
    },

    {
      id: "flights",
      header: "Flights",
      cell: ({ row }) => row.original.flights?.length ?? 0,
    },

    {
      id: "alliances",
      header: "Alliances",
      cell: ({ row }) => row.original.alliances?.length ?? 0,
    },

    {
      id: "marketingCodeshares",
      header: "Marketing Codeshares",
      cell: ({ row }) => row.original.marketingCodeshares?.length ?? 0,
    },

    {
      id: "operatingCodeshares",
      header: "Operating Codeshares",
      cell: ({ row }) => row.original.operatingCodeshares?.length ?? 0,
    },

    {
      id: "interline",
      header: "Interline",
      cell: ({ row }) => row.original.interline?.length ?? 0,
    },

    {
      id: "meal",
      header: "Meals",
      cell: ({ row }) => row.original.meal?.length ?? 0,
    },

    {
      id: "addon",
      header: "Addons",
      cell: ({ row }) => row.original.addon?.length ?? 0,
    },

    {
      id: "wifiPackage",
      header: "WiFi Packages",
      cell: ({ row }) => row.original.wifiPackage?.length ?? 0,
    },

    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },

    {
      id: "overbookingRule",
      header: "Overbooking Rules",
      cell: ({ row }) => row.original.overbookingRule?.length ?? 0,
    },

    {
      id: "insurance",
      header: "Insurance",
      cell: ({ row }) => row.original.insurance?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<FlyAirline>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<FlyAirline>({
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
