"use client";

import { ColumnDef } from "@tanstack/react-table";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RouteType } from "@/types/common/catalog/route-type.type";

export function routeTypeColumns(
  actions: (row: RouteType) => ActionMenuItem<RouteType>[],
): ColumnDef<RouteType>[] {
  return [
    {
      accessorKey: "id",
      header: "ID",
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

    {
      accessorKey: "icon",
      header: "Icon",
      cell: ({ row }) => row.original.icon ?? "-",
    },

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    {
      accessorKey: "bookingTypes",
      header: "Booking Types",

      cell: ({ row }) => {
        const bookingTypes = row.original.bookingTypes;

        if (!bookingTypes?.length) {
          return "-";
        }

        return bookingTypes.map((item) => item.name).join(", ");
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
