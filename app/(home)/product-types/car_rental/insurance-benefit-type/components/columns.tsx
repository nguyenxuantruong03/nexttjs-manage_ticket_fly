"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";

export function carRentalInsuranceBenefitTypeColumns(
  actions: (
    row: InsuranceBenefitType,
  ) => ActionMenuItem<InsuranceBenefitType>[],
): ColumnDef<InsuranceBenefitType>[] {
  return [
    createSelectionColumn<InsuranceBenefitType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<InsuranceBenefitType>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<InsuranceBenefitType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<InsuranceBenefitType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<InsuranceBenefitType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<InsuranceBenefitType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "carRentalBenefits",
      header: "Car Rental Benefits",
      cell: ({ row }) => row.original.carRentalBenefits.length,
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<InsuranceBenefitType>({
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
