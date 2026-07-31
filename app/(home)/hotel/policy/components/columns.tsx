"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { HotelPolicy } from "@/types/bookings/hotel/policy.type";

export function policyColumns(
  actions: (row: HotelPolicy) => ActionMenuItem<HotelPolicy>[],
): ColumnDef<HotelPolicy>[] {
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
      id: "type",
      header: "Type",
      cell: ({ row }) => row.original.type.name,
    },
    {
      accessorKey: "description",
      header: "Description",
    },

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "hotels",
      header: "Hotels",
      cell: ({ row }) => row.original.hotels.length,
    },
    {
      id: "rateplans",
      header: "Rate Plans",
      cell: ({ row }) => row.original.rateplans.length,
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
