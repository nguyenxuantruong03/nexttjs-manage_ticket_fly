"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { PromotionRule } from "@/types/common/commerce/promotion/promotion-rule";

export function promotionRuleColumns(
  actions: (row: PromotionRule) => ActionMenuItem<PromotionRule>[],
): ColumnDef<PromotionRule>[] {
  return [
    createSelectionColumn<PromotionRule>(),

    createDataTableColumn<PromotionRule>({
      accessorKey: "id",
      header: "ID",
    }),

    // ======================================================
    // PROMOTION
    // ======================================================

    createDataTableColumn<PromotionRule>({
      accessorKey: "promotion",
      header: "Promotion",
      cell: (row) => row.promotion?.name ?? "-",
    }),

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    createDataTableColumn<PromotionRule>({
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
    // DISCOUNT
    // ======================================================

    createDataTableColumn<PromotionRule>({
      accessorKey: "discountType",
      header: "Discount Type",
      cell: (row) => row.discountType,
    }),

    createDataTableColumn<PromotionRule>({
      accessorKey: "value",
      header: "Value",
      cell: (row) => row.value,
    }),

    createDataTableColumn<PromotionRule>({
      accessorKey: "maxDiscount",
      header: "Max Discount",
      cell: (row) => row.maxDiscount ?? "-",
    }),

    // ======================================================
    // AMOUNT RANGE
    // ======================================================

    createDataTableColumn<PromotionRule>({
      accessorKey: "minimumAmount",
      header: "Minimum Amount",
      cell: (row) => row.minimumAmount ?? "-",
    }),

    createDataTableColumn<PromotionRule>({
      accessorKey: "maximumAmount",
      header: "Maximum Amount",
      cell: (row) => row.maximumAmount ?? "-",
    }),

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<PromotionRule>({
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
