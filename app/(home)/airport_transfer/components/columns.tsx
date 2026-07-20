"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/bookings/auth/users";
import { ActionMenu } from "../../../../components/form/action-menu";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { AirportTransfer } from "@/types/bookings/airport-transfer/core/airport-transfer.types";

export const airportTransferColumns: ColumnDef<AirportTransfer>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },

  {
    accessorKey: "name",
    header: "Transfer Name",
  },

  {
    accessorKey: "providerBooking.displayName",
    header: "Provider",
  },

  {
    accessorKey: "providerBooking.verified",
    header: "Verified",
  },

  {
    accessorKey: "route.departure",
    header: "Departure",
  },

  {
    accessorKey: "route.arrival",
    header: "Arrival",
  },

  {
    accessorKey: "route.distanceKm",
    header: "Distance (km)",
  },

  {
    accessorKey: "route.duration",
    header: "Duration (min)",
  },

  {
    accessorKey: "vehicle.name",
    header: "Vehicle",
  },

  {
    accessorKey: "vehicle.type",
    header: "Vehicle Type",
  },

  {
    accessorKey: "vehicle.passenger",
    header: "Passengers",
  },

  {
    accessorKey: "vehicle.luggage",
    header: "Luggage",
  },

  {
    accessorKey: "vehicle.status",
    header: "Vehicle Status",
  },

  {
    accessorKey: "pricing.fromPrice",
    header: "From Price",
  },

  {
    accessorKey: "pricing.toPrice",
    header: "To Price",
  },

  {
    accessorKey: "availability.available",
    header: "Available",
  },

  {
    accessorKey: "schedule.departureTime",
    header: "Departure Time",
  },

  {
    accessorKey: "schedule.operatingDays",
    header: "Operating Days",
  },

  {
    accessorKey: "trip.total",
    header: "Trips",
  },

  {
    accessorKey: "service.meetAndGreet",
    header: "Meet & Greet",
  },

  {
    accessorKey: "service.freeWaitingMinutes",
    header: "Free Waiting",
  },

  {
    accessorKey: "active",
    header: "Active",
  },

  {
    accessorKey: "createdAt",
    header: "Created At",
  },

  {
    accessorKey: "updatedAt",
    header: "Updated At",
  },
];
