"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Sustainability } from "@/types/bookings/hotel/hotel-detail.type";

export function sustainabilityColumns(
  actions: (row: Sustainability) => ActionMenuItem<Sustainability>[],
): ColumnDef<Sustainability>[] {
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
