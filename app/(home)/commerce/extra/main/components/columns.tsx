"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { Extra } from "@/types/common/commerce/extra/extra.type";

export function extraColumns(
  actions: (row: Extra) => ActionMenuItem<Extra>[],
): ColumnDef<Extra>[] {
  return [
    createSelectionColumn<Extra>(),

    createDataTableColumn<Extra>({
      accessorKey: "id",
      header: "ID",
    }),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Extra>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Extra>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<Extra>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<Extra>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    createDataTableColumn<Extra>({
      accessorKey: "bookingTypes",
      header: "Booking Types",
      cell: (row) => {
        const bookingTypes = row.bookingTypes;

        return bookingTypes?.length
          ? bookingTypes.map((item) => item.name).join(", ")
          : "-";
      },
    }),

    {
      id: "type",
      header: "Extra Type",
      cell: ({ row }) => row.original.type?.name ?? "-",
    },

    // ======================================================
    // PRICING
    // ======================================================

    createDataTableColumn<Extra>({
      accessorKey: "price",
      header: "Price",
      cell: (row) => row.price.toLocaleString(),
    }),

    {
      id: "currency",
      header: "Currency",
      cell: ({ row }) => row.original.currency?.code ?? "-",
    },

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Extra>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<Extra>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Extra>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<Extra>({
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
