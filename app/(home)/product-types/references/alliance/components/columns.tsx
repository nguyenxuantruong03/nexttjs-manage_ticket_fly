"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";

export function flyAllianceColumns(
  actions: (row: FlyAlliance) => ActionMenuItem<FlyAlliance>[],
): ColumnDef<FlyAlliance>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },

    {
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "code",
      header: "Code",
    },

    {
      accessorKey: "logo",
      header: "Logo",
    },

    {
      accessorKey: "description",
      header: "Description",
    },

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

    {
      accessorKey: "createdAt",
      header: "Created At",
    },

    {
      accessorKey: "updatedAt",
      header: "Updated At",
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
