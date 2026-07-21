"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Currency } from "@/types/bookings/location/currency";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

export function currencyColumns(
  actions: (row: Currency) => ActionMenuItem<Currency>[],
): ColumnDef<Currency>[] {
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
      accessorKey: "numericCode",
      header: "Numeric Code",
    },
    {
      accessorKey: "symbol",
      header: "Symbol",
    },
    {
      accessorKey: "symbolNative",
      header: "Native Symbol",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "nativeName",
      header: "Native Name",
    },
    {
      accessorKey: "decimalDigits",
      header: "Decimal Digits",
    },
    {
      accessorKey: "rounding",
      header: "Rounding",
    },

    // ======================================================
    // DISPLAY
    // ======================================================

    {
      accessorKey: "flagEmoji",
      header: "Flag",
    },
    {
      accessorKey: "locale",
      header: "Locale",
    },

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "active",
      header: "Active",
    },
    {
      accessorKey: "isDefault",
      header: "Default",
    },

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      accessorKey: "countries",
      header: "Countries",
    },

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    {
      accessorKey: "createdAt",
      header: "Created At",
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
