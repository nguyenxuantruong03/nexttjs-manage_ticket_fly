"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Address } from "@/types/bookings/location/address";
import { ColumnDef } from "@tanstack/react-table";

export function addressColumns(
  actions: (row: Address) => ActionMenuItem<Address>[],
): ColumnDef<Address>[] {
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
      accessorKey: "houseNumber",
      header: "House Number",
    },
    {
      accessorKey: "street",
      header: "Street",
    },

    // ======================================================
    // LOCATION
    // ======================================================

    {
      accessorKey: "ward.name",
      header: "Ward",
    },
    {
      accessorKey: "district.name",
      header: "District",
    },
    {
      accessorKey: "city.name",
      header: "City",
    },
    {
      accessorKey: "country.name",
      header: "Country",
    },
    {
      accessorKey: "postcode",
      header: "Postcode",
    },
    {
      accessorKey: "latitude",
      header: "Latitude",
    },
    {
      accessorKey: "longitude",
      header: "Longitude",
    },
    {
      accessorKey: "plusCode",
      header: "Plus Code",
    },
    {
      accessorKey: "precision",
      header: "Precision",
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

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
