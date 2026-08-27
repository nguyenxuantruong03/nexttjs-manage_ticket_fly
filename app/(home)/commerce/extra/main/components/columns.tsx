"use client";

import { ColumnDef } from "@tanstack/react-table";

import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { Extra } from "@/types/common/commerce/extra/extra.type";

export function extraColumns(
  actions: (row: Extra) => ActionMenuItem<Extra>[],
): ColumnDef<Extra>[] {
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
    // RELATIONS
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

    {
      id: "type",
      header: "Extra Type",
      cell: ({ row }) => row.original.type?.name ?? "-",
    },

    // ======================================================
    // PRICING
    // ======================================================

    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => row.original.price.toLocaleString(),
    },

    {
      id: "currency",
      header: "Currency",
      cell: ({ row }) => row.original.currency?.code ?? "-",
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
