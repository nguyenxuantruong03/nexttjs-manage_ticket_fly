"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";

export function flyAllianceColumns(
  actions: (row: FlyAlliance) => ActionMenuItem<FlyAlliance>[],
): ColumnDef<FlyAlliance>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyAlliance>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyAlliance>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyAlliance>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<FlyAlliance>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<FlyAlliance>({
      accessorKey: "logo",
      header: "Logo",
    }),

    createDataTableColumn<FlyAlliance>({
      accessorKey: "description",
      header: "Description",
    }),

    // ======================================================
    // AIRLINES
    // ======================================================

    {
      id: "airlines",
      header: "Airlines",
      cell: ({ row }) => {
        const airlines = row.original.airlines;

        if (!airlines?.length) return "-";

        return airlines
          .map((member) => member.airline?.name ?? member.airlineId)
          .filter(Boolean)
          .join(", ");
      },
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<FlyAlliance>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<FlyAlliance>({
      accessorKey: "updatedAt",
      header: "Updated At",
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
