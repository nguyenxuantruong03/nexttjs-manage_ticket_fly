"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { InsuranceType } from "@/types/product-types/car_rental/insurance-type.type";

export function carRentalInsuranceTypeColumns(
  actions: (row: InsuranceType) => ActionMenuItem<InsuranceType>[],
): ColumnDef<InsuranceType>[] {
  return [
    createSelectionColumn<InsuranceType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<InsuranceType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<InsuranceType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<InsuranceType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<InsuranceType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<InsuranceType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "carRentalInsurances",
      header: "Car Rental Insurances",
      cell: ({ row }) => row.original.carRentalInsurances.length,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<InsuranceType>({
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
