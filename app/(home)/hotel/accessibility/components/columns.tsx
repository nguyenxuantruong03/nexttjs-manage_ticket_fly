"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Accessibility } from "@/types/bookings/hotel/hotel-detail.type";

export function accessibilityColumns(
  actions: (row: Accessibility) => ActionMenuItem<Accessibility>[],
): ColumnDef<Accessibility>[] {
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
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => row.original.description ?? "-",
    },

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "hotels",
      header: "Hotels",
      cell: ({ row }) => row.original.hotels.length,
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
