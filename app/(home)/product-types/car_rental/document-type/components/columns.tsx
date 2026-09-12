"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";

export function carRentalDocumentTypeColumns(
  actions: (
    row: CarRentalDocumentType,
  ) => ActionMenuItem<CarRentalDocumentType>[],
): ColumnDef<CarRentalDocumentType>[] {
  return [
    createSelectionColumn<CarRentalDocumentType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<CarRentalDocumentType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<CarRentalDocumentType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<CarRentalDocumentType>({
      accessorKey: "slug",
      header: "Slug",
      cell: (row) => row.slug ?? "-",
    }),

    createDataTableColumn<CarRentalDocumentType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<CarRentalDocumentType>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<CarRentalDocumentType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<CarRentalDocumentType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "carRentals",
      header: "Car Rentals",
      cell: ({ row }) => row.original.carRentals.length,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<CarRentalDocumentType>({
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
