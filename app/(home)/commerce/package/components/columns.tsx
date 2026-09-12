"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { Package } from "@/types/common/commerce/package/package.type";

export function packageColumns(
  actions: (row: Package) => ActionMenuItem<Package>[],
): ColumnDef<Package>[] {
  return [
    createSelectionColumn<Package>(),

    // ======================================================
    // ID
    // ======================================================

    createDataTableColumn<Package>({
      accessorKey: "id",
      header: "ID",
    }),

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    createDataTableColumn<Package>({
      accessorKey: "bookingTypes",
      header: "Booking Types",
      cell: (row) => {
        const bookingTypes = row.bookingTypes;

        return bookingTypes?.length
          ? bookingTypes.map((item) => item.name).join(", ")
          : "-";
      },
    }),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Package>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Package>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<Package>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // DURATION
    // ======================================================

    createDataTableColumn<Package>({
      accessorKey: "duration",
      header: "Duration",
      cell: (row) => row.duration ?? "-",
    }),

    createDataTableColumn<Package>({
      accessorKey: "durationType",
      header: "Duration Type",
      cell: (row) => row.durationType ?? "-",
    }),

    // ======================================================
    // CAPACITY
    // ======================================================

    createDataTableColumn<Package>({
      accessorKey: "maxGuests",
      header: "Max Guests",
      cell: (row) => row.maxGuests ?? "-",
    }),

    // ======================================================
    // BASE PRICE
    // ======================================================

    createDataTableColumn<Package>({
      accessorKey: "price",
      header: "Price",
    }),

    {
      id: "currency",
      header: "Currency",
      cell: ({ row }) => {
        const currency = row.original.currency;

        if (!currency) return "-";

        return `${currency.code}${
          currency.symbol ? ` (${currency.symbol})` : ""
        }`;
      },
    },

    // ======================================================
    // CONTENT
    // ======================================================

    createDataTableColumn<Package>({
      accessorKey: "includedItems",
      header: "Included Items",
      cell: (row) => {
        const items = row.includedItems;

        if (!items?.length) return "-";

        return items.join(", ");
      },
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Package>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<Package>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "images",
      header: "Images",
      cell: ({ row }) => {
        const images = row.original.images;

        if (!images?.length) return "-";

        return images.length;
      },
    },

    {
      id: "packageExtra",
      header: "Extras",
      cell: ({ row }) => {
        const packageExtra = row.original.packageExtra;

        if (!packageExtra?.length) return "-";

        return packageExtra.length;
      },
    },

    {
      id: "yachtMappers",
      header: "Yacht Mappers",
      cell: ({ row }) => {
        const mappers = row.original.yachtMappers;

        if (!mappers?.length) return "-";

        return mappers.length;
      },
    },

    {
      id: "hotelMappers",
      header: "Hotel Mappers",
      cell: ({ row }) => {
        const mappers = row.original.hotelMappers;

        if (!mappers?.length) return "-";

        return mappers.length;
      },
    },

    {
      id: "busMappers",
      header: "Bus Mappers",
      cell: ({ row }) => {
        const mappers = row.original.busMappers;

        if (!mappers?.length) return "-";

        return mappers.length;
      },
    },

    {
      id: "carRentalMappers",
      header: "Car Rental Mappers",
      cell: ({ row }) => {
        const mappers = row.original.carRentalMappers;

        if (!mappers?.length) return "-";

        return mappers.length;
      },
    },

    {
      id: "flyMappers",
      header: "Fly Mappers",
      cell: ({ row }) => {
        const mappers = row.original.flyMappers;

        if (!mappers?.length) return "-";

        return mappers.length;
      },
    },

    {
      id: "airportTransferMappers",
      header: "Airport Transfer Mappers",
      cell: ({ row }) => {
        const mappers = row.original.airportTransferMappers;

        if (!mappers?.length) return "-";

        return mappers.length;
      },
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Package>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<Package>({
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (row) => new Date(row.updatedAt).toLocaleString(),
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
