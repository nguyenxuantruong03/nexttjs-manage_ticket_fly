"use client";

import { ColumnDef } from "@tanstack/react-table";

import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { Coupon } from "@/types/common/commerce/coupon";

export function couponColumns(
  actions: (row: Coupon) => ActionMenuItem<Coupon>[],
): ColumnDef<Coupon>[] {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },

    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "code",
      header: "Code",
    },

    {
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => row.original.description ?? "-",
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
    },

    {
      accessorKey: "maxDiscount",
      header: "Max Discount",
      cell: ({ row }) => row.original.maxDiscount ?? "-",
    },

    {
      accessorKey: "minimumAmount",
      header: "Minimum Amount",
      cell: ({ row }) => row.original.minimumAmount ?? "-",
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
    // USAGE
    // ======================================================

    {
      accessorKey: "usageLimit",
      header: "Usage Limit",
      cell: ({ row }) => row.original.usageLimit ?? "-",
    },

    {
      accessorKey: "usedCount",
      header: "Used Count",
    },

    // ======================================================
    // DATE
    // ======================================================

    {
      accessorKey: "startDate",
      header: "Start Date",
      cell: ({ row }) =>
        row.original.startDate
          ? new Date(row.original.startDate).toLocaleString()
          : "-",
    },

    {
      accessorKey: "endDate",
      header: "End Date",
      cell: ({ row }) =>
        row.original.endDate
          ? new Date(row.original.endDate).toLocaleString()
          : "-",
    },

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "active",
      header: "Active",
      cell: ({ row }) => (row.original.active ? "Yes" : "No"),
    },

    // ======================================================
    // TIMESTAMPS
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
