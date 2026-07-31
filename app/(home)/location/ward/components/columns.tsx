"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Ward } from "@/types/bookings/location/ward";
import { ColumnDef } from "@tanstack/react-table";

export function wardColumns(
  actions: (row: Ward) => ActionMenuItem<Ward>[],
): ColumnDef<Ward>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },

    {
      accessorKey: "code",
      header: "Code",
    },

    {
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "nativeName",
      header: "Native Name",
    },

    // ======================================================
    // RELATION
    // ======================================================

    {
      accessorKey: "district.name",
      header: "District",
    },

    // ======================================================
    // LOCATION
    // ======================================================

    {
      accessorKey: "latitude",
      header: "Latitude",
    },

    {
      accessorKey: "longitude",
      header: "Longitude",
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
