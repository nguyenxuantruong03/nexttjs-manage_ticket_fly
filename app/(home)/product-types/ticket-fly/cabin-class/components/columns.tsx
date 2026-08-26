"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";

export function flyCabinClassColumns(
  actions: (row: FlyCabinClass) => ActionMenuItem<FlyCabinClass>[],
): ColumnDef<FlyCabinClass>[] {
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
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => row.original.description ?? "-",
    },

    {
      accessorKey: "icon",
      header: "Icon",
      cell: ({ row }) => row.original.icon ?? "-",
    },

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "sortOrder",
      header: "Sort Order",
    },

    {
      accessorKey: "active",
      header: "Active",
      cell: ({ row }) => (row.original.active ? "Yes" : "No"),
    },

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "cabins",
      header: "Cabins",
      cell: ({ row }) => row.original.cabins?.length ?? 0,
    },

    {
      id: "fares",
      header: "Fares",
      cell: ({ row }) => row.original.fares?.length ?? 0,
    },

    {
      id: "cabinInventories",
      header: "Inventories",
      cell: ({ row }) => row.original.cabinInventories?.length ?? 0,
    },

    {
      id: "overbookingRules",
      header: "Overbooking Rules",
      cell: ({ row }) => row.original.overbookingRules?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
    },

    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: ({ row }) => new Date(row.original.updatedAt).toLocaleString(),
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
