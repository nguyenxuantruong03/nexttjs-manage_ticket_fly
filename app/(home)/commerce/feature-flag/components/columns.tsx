"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { FeatureFlag } from "@/types/common/commerce/feature-flag.type";

export function featureFlagColumns(
  actions: (row: FeatureFlag) => ActionMenuItem<FeatureFlag>[],
): ColumnDef<FeatureFlag>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FeatureFlag>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FeatureFlag>({
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

    createDataTableColumn<FeatureFlag>({
      accessorKey: "key",
      header: "Key",
      meta: {
        exportLabel: "Key",
        filterLabel: "Key",
      },
    }),

    createDataTableColumn<FeatureFlag>({
      accessorKey: "description",
      header: "Description",
      exclude: ["sorting", "filtering"],
      meta: {
        exportLabel: "Description",
      },
      cell: (row) => row.description ?? "-",
      exportValue: (row) => row.description ?? "",
    }),

    createDataTableColumn<FeatureFlag>({
      accessorKey: "targetRegions",
      header: "Target Regions",
      exclude: ["sorting", "filtering"],
      meta: {
        exportLabel: "Target Regions",
      },
      cell: (row) =>
        row.targetRegions.length ? row.targetRegions.join(", ") : "-",
      exportValue: (row) => row.targetRegions.join(", "),
    }),

    // ======================================================
    // ROLLOUT
    // ======================================================

    createDataTableColumn<FeatureFlag>({
      accessorKey: "rolloutPercent",
      header: "Rollout Percent",
      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "Rollout Percent",
        filterLabel: "Rollout Percent",
      },
      cell: (row) => `${row.rolloutPercent}%`,
      exportValue: (row) => row.rolloutPercent,
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FeatureFlag>({
      accessorKey: "isEnabled",
      header: "Enabled",
      meta: {
        filterVariant: "boolean",
        exportLabel: "Enabled",
        filterLabel: "Enabled",
      },
      cell: (row) => (row.isEnabled ? "Yes" : "No"),
      exportValue: (row) => row.isEnabled,
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<FeatureFlag>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      meta: {
        exportLabel: "Created At",
      },
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<FeatureFlag>({
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
