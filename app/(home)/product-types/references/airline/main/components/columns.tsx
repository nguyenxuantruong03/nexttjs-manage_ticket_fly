"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

export function flyAirlineColumns(
  actions: (row: FlyAirline) => ActionMenuItem<FlyAirline>[],
): ColumnDef<FlyAirline>[] {
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
      accessorKey: "legalName",
      header: "Legal Name",
      cell: ({ row }) => row.original.legalName ?? "-",
    },

    {
      accessorKey: "iataCode",
      header: "IATA",
      cell: ({ row }) => row.original.iataCode ?? "-",
    },

    {
      accessorKey: "icaoCode",
      header: "ICAO",
      cell: ({ row }) => row.original.icaoCode ?? "-",
    },

    {
      accessorKey: "callsign",
      header: "Callsign",
      cell: ({ row }) => row.original.callsign ?? "-",
    },

    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => row.original.country ?? "-",
    },

    {
      accessorKey: "website",
      header: "Website",
      cell: ({ row }) => row.original.website ?? "-",
    },

    {
      accessorKey: "hotline",
      header: "Hotline",
      cell: ({ row }) => row.original.hotline ?? "-",
    },

    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => row.original.email ?? "-",
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
