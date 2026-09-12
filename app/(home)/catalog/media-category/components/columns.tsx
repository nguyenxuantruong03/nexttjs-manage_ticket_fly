"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { MediaCategory } from "@/types/common/catalog/media-category";

export function mediaCategoryColumns(
  actions: (row: MediaCategory) => ActionMenuItem<MediaCategory>[],
): ColumnDef<MediaCategory>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<MediaCategory>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<MediaCategory>({
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

    createDataTableColumn<MediaCategory>({
      accessorKey: "name",
      header: "Name",
      meta: {
        exportLabel: "Name",
        filterLabel: "Name",
      },
    }),

    createDataTableColumn<MediaCategory>({
      accessorKey: "slug",
      header: "Slug",
      meta: {
        exportLabel: "Slug",
        filterLabel: "Slug",
      },
    }),

    createDataTableColumn<MediaCategory>({
      accessorKey: "description",
      header: "Description",
      meta: {
        exportLabel: "Description",
        filterLabel: "Description",
      },
      cell: (row) => row.description ?? "-",
      exportValue: (row) => row.description ?? "",
    }),

    createDataTableColumn<MediaCategory>({
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

    createDataTableColumn<MediaCategory>({
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

    createDataTableColumn<MediaCategory>({
      accessorKey: "active",
      header: "Active",
      meta: {
        filterVariant: "boolean",
        exportLabel: "Active",
      },
      cell: (row) => (row.active ? "Yes" : "No"),
      exportValue: (row) => row.active,
    }),

    createDataTableColumn<MediaCategory>({
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

    createDataTableColumn<MediaCategory>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Created At",
      },
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<MediaCategory>({
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
