"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { Facility } from "@/types/common/features/facility/facility";

export function facilityColumns(
  actions: (row: Facility) => ActionMenuItem<Facility>[],
): ColumnDef<Facility>[] {
  return [
    createSelectionColumn<Facility>(),

    createDataTableColumn<Facility>({
      accessorKey: "id",
      header: "ID",
    }),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Facility>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Facility>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<Facility>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // CATEGORY
    // ======================================================

    createDataTableColumn<Facility>({
      accessorKey: "category",
      header: "Category",
      cell: (row) => row.category?.name ?? "-",
    }),

    createDataTableColumn<Facility>({
      accessorKey: "bookingTypes",
      header: "Booking Types",
      cell: (row) => {
        const bookingTypes = row.bookingTypes;

        if (!bookingTypes?.length) {
          return "-";
        }

        return bookingTypes.map((item) => item.name).join(", ");
      },
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Facility>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<Facility>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Facility>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
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
