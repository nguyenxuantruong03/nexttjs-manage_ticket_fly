"use client";

import { ColumnDef } from "@tanstack/react-table";

import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { Package } from "@/types/common/commerce/package/package.type";

export function packageColumns(
  actions: (row: Package) => ActionMenuItem<Package>[],
): ColumnDef<Package>[] {
  return [
    // ======================================================
    // ID
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    {
      accessorKey: "bookingTypes",
      header: "Booking Types",

      cell: ({ row }) => {
        const bookingTypes = row.original.bookingTypes;

        return bookingTypes?.length
          ? bookingTypes.map((item) => item.name).join(", ")
          : "-";
      },
    },

    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "slug",
      header: "Slug",
    },

    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => row.original.description ?? "-",
    },

    // ======================================================
    // DURATION
    // ======================================================

    {
      accessorKey: "duration",
      header: "Duration",
      cell: ({ row }) => row.original.duration ?? "-",
    },

    {
      accessorKey: "durationType",
      header: "Duration Type",
      cell: ({ row }) => row.original.durationType ?? "-",
    },

    // ======================================================
    // CAPACITY
    // ======================================================

    {
      accessorKey: "maxGuests",
      header: "Max Guests",
      cell: ({ row }) => row.original.maxGuests ?? "-",
    },

    // ======================================================
    // BASE PRICE
    // ======================================================

    {
      accessorKey: "price",
      header: "Price",
    },

    {
      id: "currency",
      header: "Currency",
      cell: ({ row }) => {
        const currency = row.original.currency;

        if (!currency) return "-";

        return `${currency.code}${currency.symbol ? ` (${currency.symbol})` : ""}`;
      },
    },

    // ======================================================
    // CONTENT
    // ======================================================

    {
      accessorKey: "includedItems",
      header: "Included Items",
      cell: ({ row }) => {
        const items = row.original.includedItems;

        if (!items?.length) return "-";

        return items.join(", ");
      },
    },

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "active",
      header: "Active",
      cell: ({ row }) => (row.original.active ? "Yes" : "No"),
    },

    {
      accessorKey: "sortOrder",
      header: "Sort Order",
    },

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

    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
    },

    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: ({ row }) => new Date(row.original.updatedAt).toLocaleString(),
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
