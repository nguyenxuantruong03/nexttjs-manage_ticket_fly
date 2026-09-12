"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";

export function hotelCheckInPolicyColumns(
  actions: (row: HotelCheckInPolicy) => ActionMenuItem<HotelCheckInPolicy>[],
): ColumnDef<HotelCheckInPolicy>[] {
  return [
    createSelectionColumn<HotelCheckInPolicy>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<HotelCheckInPolicy>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<HotelCheckInPolicy>({
      accessorKey: "hotelId",
      header: "Hotel ID",
    }),

    // ======================================================
    // CHECK-IN / CHECK-OUT
    // ======================================================

    createDataTableColumn<HotelCheckInPolicy>({
      accessorKey: "checkInFrom",
      header: "Check-In From",
      cell: (row) => row.checkInFrom ?? "-",
    }),

    createDataTableColumn<HotelCheckInPolicy>({
      accessorKey: "checkInUntil",
      header: "Check-In Until",
      cell: (row) => row.checkInUntil ?? "-",
    }),

    createDataTableColumn<HotelCheckInPolicy>({
      accessorKey: "checkOutUntil",
      header: "Check-Out Until",
      cell: (row) => row.checkOutUntil ?? "-",
    }),

    createDataTableColumn<HotelCheckInPolicy>({
      accessorKey: "minimumAge",
      header: "Minimum Age",
      cell: (row) => row.minimumAge ?? "-",
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
