"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

export function carRentalColumns(
  actions: (row: CarRental) => ActionMenuItem<CarRental>[],
): ColumnDef<CarRental>[] {
  return [
    createSelectionColumn<CarRental>(),

    createDataTableColumn<CarRental>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "driverOption",
      header: "Driver Option",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "providerBookingId",
      header: "Provider Booking",
    }),

    // ======================================================
    // Vehicle
    // ======================================================

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "Brand",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((vehicle) => vehicle.brand).join(", ")
          : "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "Model",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((vehicle) => vehicle.model).join(", ")
          : "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "Status",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((vehicle) => vehicle.status).join(", ")
          : "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "Year",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((vehicle) => vehicle.year).join(", ")
          : "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "Color",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((vehicle) => vehicle.color).join(", ")
          : "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "Transmission",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((vehicle) => vehicle.transmission).join(", ")
          : "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "Fuel Type",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((vehicle) => vehicle.fuelType).join(", ")
          : "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "License Plate",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((vehicle) => vehicle.licensePlate).join(", ")
          : "-",
    }),

    {
      id: "vehicleImage",
      header: "Image",
      cell: ({ row }) =>
        row.original.vehicle?.length
          ? row.original.vehicle
              .map((vehicle) => vehicle.medias.join("-"))
              .filter(Boolean)
              .join(", ") || "-"
          : "-",
    },

    // ======================================================
    // Capacity
    // ======================================================

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "Seats",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((vehicle) => vehicle.capacity?.seatCount).join(", ")
          : "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "Luggage",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle
              .map((vehicle) => vehicle.capacity?.luggageCount)
              .join(", ")
          : "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "vehicle",
      header: "Doors",
      cell: (row) =>
        row.vehicle?.length
          ? row.vehicle.map((vehicle) => vehicle.capacity?.doorCount).join(", ")
          : "-",
    }),

    // ======================================================
    // Schedule
    // ======================================================

    createDataTableColumn<CarRental>({
      accessorKey: "trip",
      header: "Duration",
      cell: (row) => row.trip?.schedule?.durationType ?? "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "trip",
      header: "Pickup Time",
      cell: (row) => row.trip?.schedule?.pickupTime ?? "-",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "trip",
      header: "Return Time",
      cell: (row) => row.trip?.schedule?.returnTime ?? "-",
    }),

    // ======================================================
    // Policy
    // ======================================================

    createDataTableColumn<CarRental>({
      accessorKey: "policies",
      header: "Fuel Policy",
      cell: (row) =>
        row.policies?.length
          ? row.policies.map((policy) => policy.valueText).join(", ")
          : "-",
    }),

    // ======================================================
    // Review
    // ======================================================

    {
      id: "reviewRating",
      header: "Rating",
      cell: ({ row }) =>
        row.original.reviews?.length
          ? row.original.reviews
              .map((review) => review.overallRating)
              .join(", ")
          : "-",
    },

    {
      id: "reviewComment",
      header: "Review",
      cell: ({ row }) =>
        row.original.reviews?.length
          ? row.original.reviews.map((review) => review.comment).join(", ")
          : "-",
    },

    {
      id: "reviewVerified",
      header: "Verified",
      cell: ({ row }) =>
        row.original.reviews?.length
          ? row.original.reviews.map((review) => review.verified).join(", ")
          : "-",
    },

    // ======================================================
    // Time
    // ======================================================

    createDataTableColumn<CarRental>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<CarRental>({
      accessorKey: "updatedAt",
      header: "Updated At",
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
