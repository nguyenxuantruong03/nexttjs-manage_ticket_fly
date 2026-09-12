"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { HotelRatePlanType } from "@/types/product-types/hotel/pricing/rate-plan.types";

export function ratePlanTypeColumns(
  actions: (row: HotelRatePlanType) => ActionMenuItem<HotelRatePlanType>[],
): ColumnDef<HotelRatePlanType>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<HotelRatePlanType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<HotelRatePlanType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<HotelRatePlanType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<HotelRatePlanType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<HotelRatePlanType>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // SETTINGS
    // ======================================================

    createDataTableColumn<HotelRatePlanType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<HotelRatePlanType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<HotelRatePlanType>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => row.createdAt.toLocaleString(),
    }),

    createDataTableColumn<HotelRatePlanType>({
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (row) => row.updatedAt.toLocaleString(),
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
