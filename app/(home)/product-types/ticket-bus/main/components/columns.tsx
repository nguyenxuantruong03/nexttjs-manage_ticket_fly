"use client";

import { ColumnDef } from "@tanstack/react-table";

import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { Bus } from "@/types/product-types/bus/core/bus.types";

export function ticketBusColumns(
  actions: (row: Bus) => ActionMenuItem<Bus>[],
): ColumnDef<Bus>[] {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },

    {
      accessorKey: "cityId",
      header: "City",
    },

    // Information

    {
      accessorKey: "information.providerBookingId",

      header: "Provider Booking",
    },

    {
      accessorKey: "information.addressId",

      header: "Address",
    },

    // Room Summary

    {
      accessorKey: "inventory.0.roomSummary.name",

      header: "Room",
    },

    {
      accessorKey: "inventory.0.roomSummary.totalRooms",

      header: "Rooms",
    },

    // Price

    {
      accessorKey: "inventory.0.price.finalPrice",

      header: "Final Price",
    },

    {
      accessorKey: "inventory.0.price.averageNightlyPrice",

      header: "Nightly Price",
    },

    // Availability

    {
      accessorKey: "inventory.0.availability.isAvailable",

      header: "Available",
    },

    {
      accessorKey: "inventory.0.availability.availableRooms",

      header: "Available Rooms",
    },

    // Policies

    {
      accessorKey: "policies.checkIn.checkInTime",

      header: "Check In",
    },

    {
      accessorKey: "policies.checkIn.checkOutTime",

      header: "Check Out",
    },

    // Review

    {
      accessorKey: "reviews.0.overallRating",

      header: "Rating",
    },

    {
      accessorKey: "reviews.0.verified",

      header: "Verified",
    },

    // Time

    {
      accessorKey: "createdAt",
      header: "Created At",
    },

    {
      accessorKey: "updatedAt",
      header: "Updated At",
    },

    // ACTION
    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
