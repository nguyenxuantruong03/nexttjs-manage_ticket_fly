"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { Coupon } from "@/types/common/commerce/coupon";

export function couponColumns(
  actions: (row: Coupon) => ActionMenuItem<Coupon>[],
): ColumnDef<Coupon>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<Coupon>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Coupon>({
      accessorKey: "id",
      header: "ID",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "ID",
      },
      summary: {
        type: "count",
        label: "Số dòng",
      },
    }),

    createDataTableColumn<Coupon>({
      accessorKey: "code",
      header: "Code",
      meta: {
        exportLabel: "Code",
        filterLabel: "Code",
      },
    }),

    createDataTableColumn<Coupon>({
      accessorKey: "name",
      header: "Name",
      meta: {
        exportLabel: "Name",
        filterLabel: "Name",
      },
    }),

    createDataTableColumn<Coupon>({
      accessorKey: "description",
      header: "Description",
      meta: {
        exportLabel: "Description",
        filterLabel: "Description",
      },
      cell: (row) => row.description ?? "-",
      exportValue: (row) => row.description ?? "",
    }),

    // ======================================================
    // DISCOUNT
    // ======================================================

    createDataTableColumn<Coupon>({
      accessorKey: "discountType",
      header: "Discount Type",
      meta: {
        exportLabel: "Discount Type",
        filterLabel: "Discount Type",
      },
      exportValue: (row) => row.discountType,
    }),

    createDataTableColumn<Coupon>({
      accessorKey: "value",
      header: "Value",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "Value",
      },
      summary: {
        type: "sum",
        value: (row) => Number(row.value ?? 0),
        label: "Tổng giá trị",
      },
    }),

    createDataTableColumn<Coupon>({
      accessorKey: "maxDiscount",
      header: "Max Discount",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "Max Discount",
      },
      cell: (row) => row.maxDiscount ?? "-",
      exportValue: (row) => row.maxDiscount ?? "",
    }),

    createDataTableColumn<Coupon>({
      accessorKey: "minimumAmount",
      header: "Minimum Amount",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "Minimum Amount",
      },
      cell: (row) => row.minimumAmount ?? "-",
      exportValue: (row) => row.minimumAmount ?? "",
    }),

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    createDataTableColumn<Coupon>({
      accessorKey: "bookingTypes",
      header: "Booking Types",
      exclude: ["sorting", "filtering"],
      meta: {
        exportLabel: "Booking Types",
      },
      cell: (row) => {
        const bookingTypes = row.bookingTypes;

        if (!bookingTypes?.length) {
          return "-";
        }

        return bookingTypes.map((item) => item.name).join(", ");
      },
      exportValue: (row) =>
        row.bookingTypes?.map((item) => item.name).join(", ") ?? "",
    }),

    // ======================================================
    // USAGE
    // ======================================================

    createDataTableColumn<Coupon>({
      accessorKey: "usageLimit",
      header: "Usage Limit",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "Usage Limit",
      },
      cell: (row) => row.usageLimit ?? "-",
      exportValue: (row) => row.usageLimit ?? "",
    }),

    createDataTableColumn<Coupon>({
      accessorKey: "usedCount",
      header: "Used Count",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "Used Count",
      },
      summary: {
        type: "sum",
        value: (row) => Number(row.usedCount ?? 0),
        label: "Đã sử dụng",
      },
    }),

    // ======================================================
    // DATE
    // ======================================================

    createDataTableColumn<Coupon>({
      accessorKey: "startDate",
      header: "Start Date",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Start Date",
      },
      cell: (row) =>
        row.startDate ? new Date(row.startDate).toLocaleString() : "-",
      exportValue: (row) =>
        row.startDate ? new Date(row.startDate).toLocaleString() : "",
    }),

    createDataTableColumn<Coupon>({
      accessorKey: "endDate",
      header: "End Date",
      exclude: ["filtering"],
      meta: {
        exportLabel: "End Date",
      },
      cell: (row) =>
        row.endDate ? new Date(row.endDate).toLocaleString() : "-",
      exportValue: (row) =>
        row.endDate ? new Date(row.endDate).toLocaleString() : "",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Coupon>({
      accessorKey: "active",
      header: "Active",
      meta: {
        filterVariant: "boolean",
        exportLabel: "Active",
      },
      cell: (row) => (row.active ? "Yes" : "No"),
      exportValue: (row) => row.active,
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Coupon>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Created At",
      },
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    // ======================================================
    // ACTIONS
    // ======================================================

    {
      id: "actions",
      size: 56,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      enablePinning: false,
      enableResizing: false,
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
