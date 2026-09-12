"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RegulationCategory } from "@/types/common/commerce/compliance-legal.type";

export function regulationCategoryColumns(
  actions: (row: RegulationCategory) => ActionMenuItem<RegulationCategory>[],
): ColumnDef<RegulationCategory>[] {
  return [
    // ======================================================
    // SELECT
    // ======================================================

    createSelectionColumn<RegulationCategory>(),

    // ======================================================
    // ID
    // ======================================================

    createDataTableColumn<RegulationCategory>({
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

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<RegulationCategory>({
      accessorKey: "code",
      header: "Code",
      meta: {
        exportLabel: "Code",
      },
    }),

    createDataTableColumn<RegulationCategory>({
      accessorKey: "name",
      header: "Name",
      meta: {
        exportLabel: "Name",
      },
    }),

    createDataTableColumn<RegulationCategory>({
      accessorKey: "description",
      header: "Description",
      exclude: ["sorting", "filtering"],
      meta: {
        exportLabel: "Description",
      },
      cell: (row) => row.description ?? "-",
      exportValue: (row) => row.description ?? "",
    }),

    // ======================================================
    // REGULATIONS
    // ======================================================

    createDataTableColumn<RegulationCategory>({
      accessorKey: "regulations",
      header: "Regulations",
      exclude: ["sorting", "filtering"],
      meta: {
        exportLabel: "Regulations",
      },
      cell: (row) => {
        const regulations = row.regulations;

        if (!regulations?.length) {
          return "-";
        }

        return regulations.map((item) => item.title).join(", ");
      },
      exportValue: (row) =>
        row.regulations?.map((item) => item.title).join(", ") ?? "",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<RegulationCategory>({
      accessorKey: "isActive",
      header: "Active",
      meta: {
        filterVariant: "boolean",
        exportLabel: "Active",
      },
      cell: (row) => (row.isActive ? "Yes" : "No"),
      exportValue: (row) => row.isActive,
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<RegulationCategory>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Created At",
      },
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<RegulationCategory>({
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
