"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";

export function hotelCheckInPolicyColumns(
  actions: (row: HotelCheckInPolicy) => ActionMenuItem<HotelCheckInPolicy>[],
): ColumnDef<HotelCheckInPolicy>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },

    {
      accessorKey: "hotelId",
      header: "Hotel ID",
    },

    // ======================================================
    // CHECK-IN / CHECK-OUT
    // ======================================================

    {
      accessorKey: "checkInFrom",
      header: "Check-In From",
      cell: ({ row }) => row.original.checkInFrom ?? "-",
    },

    {
      accessorKey: "checkInUntil",
      header: "Check-In Until",
      cell: ({ row }) => row.original.checkInUntil ?? "-",
    },

    {
      accessorKey: "checkOutUntil",
      header: "Check-Out Until",
      cell: ({ row }) => row.original.checkOutUntil ?? "-",
    },

    {
      accessorKey: "minimumAge",
      header: "Minimum Age",
      cell: ({ row }) => row.original.minimumAge ?? "-",
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
