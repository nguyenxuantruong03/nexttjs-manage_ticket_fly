"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RouteType } from "@/types/common/catalog/route-type.type";

export function routeTypeColumns(
  actions: (row: RouteType) => ActionMenuItem<RouteType>[],
): ColumnDef<RouteType>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<RouteType>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<RouteType>({
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

    createDataTableColumn<RouteType>({
      accessorKey: "name",
      header: "Name",
      meta: {
        exportLabel: "Name",
        filterLabel: "Name",
      },
    }),

    createDataTableColumn<RouteType>({
      accessorKey: "slug",
      header: "Slug",
      meta: {
        exportLabel: "Slug",
        filterLabel: "Slug",
      },
    }),

    createDataTableColumn<RouteType>({
      accessorKey: "description",
      header: "Description",
      meta: {
        exportLabel: "Description",
        filterLabel: "Description",
      },
      cell: (row) => row.description ?? "-",
      exportValue: (row) => row.description ?? "",
    }),

    createDataTableColumn<RouteType>({
      accessorKey: "icon",
      header: "Icon",
      meta: {
        exportLabel: "Icon",
        filterLabel: "Icon",
      },
      cell: (row) => row.icon ?? "-",
      exportValue: (row) => row.icon ?? "",
    }),

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    createDataTableColumn<RouteType>({
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
    // STATUS
    // ======================================================

    createDataTableColumn<RouteType>({
      accessorKey: "active",
      header: "Active",
      meta: {
        filterVariant: "boolean",
        exportLabel: "Active",
      },
      cell: (row) => (row.active ? "Yes" : "No"),
      exportValue: (row) => row.active,
    }),

    createDataTableColumn<RouteType>({
      accessorKey: "sortOrder",
      header: "Sort Order",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "Sort Order",
      },
      summary: {
        type: "sum",
        value: (row) => row.sortOrder ?? 0,
        label: "Tổng thứ tự",
      },
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<RouteType>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Created At",
      },
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<RouteType>({
      accessorKey: "updatedAt",
      header: "Updated At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Updated At",
      },
      cell: (row) => new Date(row.updatedAt).toLocaleString(),
      exportValue: (row) => new Date(row.updatedAt).toLocaleString(),
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
