"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

export function priceRuleTypeColumns(
  actions: (row: PriceRuleType) => ActionMenuItem<PriceRuleType>[],
): ColumnDef<PriceRuleType>[] {
  return [
    createSelectionColumn<PriceRuleType>(),

    createDataTableColumn<PriceRuleType>({
      accessorKey: "id",
      header: "ID",
    }),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<PriceRuleType>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<PriceRuleType>({
      accessorKey: "slug",
      header: "Slug",
    }),

    createDataTableColumn<PriceRuleType>({
      accessorKey: "description",
      header: "Description",
      cell: (row) => row.description ?? "-",
    }),

    createDataTableColumn<PriceRuleType>({
      accessorKey: "icon",
      header: "Icon",
      cell: (row) => row.icon ?? "-",
    }),

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    createDataTableColumn<PriceRuleType>({
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

    createDataTableColumn<PriceRuleType>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    createDataTableColumn<PriceRuleType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<PriceRuleType>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<PriceRuleType>({
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
