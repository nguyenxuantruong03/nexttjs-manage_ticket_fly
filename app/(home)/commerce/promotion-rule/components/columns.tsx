"use client";

import { ColumnDef } from "@tanstack/react-table";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { PromotionRule } from "@/types/common/commerce/promotion/promotion-rule";

export function promotionRuleColumns(
  actions: (row: PromotionRule) => ActionMenuItem<PromotionRule>[],
): ColumnDef<PromotionRule>[] {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },

    // ======================================================
    // PROMOTION
    // ======================================================

    {
      accessorKey: "promotion",
      header: "Promotion",
      cell: ({ row }) => row.original.promotion?.name ?? "-",
    },

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    {
      accessorKey: "bookingType",
      header: "Booking Type",
      cell: ({ row }) => row.original.bookingType?.name ?? "-",
    },

    // ======================================================
    // DISCOUNT
    // ======================================================

    {
      accessorKey: "discountType",
      header: "Discount Type",
      cell: ({ row }) => row.original.discountType,
    },

    {
      accessorKey: "value",
      header: "Value",
      cell: ({ row }) => row.original.value,
    },

    {
      accessorKey: "maxDiscount",
      header: "Max Discount",
      cell: ({ row }) => row.original.maxDiscount ?? "-",
    },

    // ======================================================
    // AMOUNT RANGE
    // ======================================================

    {
      accessorKey: "minimumAmount",
      header: "Minimum Amount",
      cell: ({ row }) => row.original.minimumAmount ?? "-",
    },

    {
      accessorKey: "maximumAmount",
      header: "Maximum Amount",
      cell: ({ row }) => row.original.maximumAmount ?? "-",
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
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
