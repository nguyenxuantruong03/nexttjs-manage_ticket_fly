"use client";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { Currency } from "@/types/location/currency";

import { ColumnDef } from "@tanstack/react-table";

export function currencyColumns(
  actions: (row: Currency) => ActionMenuItem<Currency>[],
): ColumnDef<Currency>[] {
  return [
    createSelectionColumn<Currency>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Currency>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "code",
      header: "Code",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "numericCode",
      header: "Numeric Code",
      cell: (row) => row.numericCode ?? "-",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "symbol",
      header: "Symbol",
      cell: (row) => row.symbol ?? "-",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "symbolNative",
      header: "Native Symbol",
      cell: (row) => row.symbolNative ?? "-",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "nativeName",
      header: "Native Name",
      cell: (row) => row.nativeName ?? "-",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "decimalDigits",
      header: "Decimal Digits",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "rounding",
      header: "Rounding",
    }),

    // ======================================================
    // DISPLAY
    // ======================================================

    createDataTableColumn<Currency>({
      accessorKey: "flagEmoji",
      header: "Flag",
      cell: (row) => row.flagEmoji ?? "-",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "locale",
      header: "Locale",
      cell: (row) => row.locale ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<Currency>({
      accessorKey: "active",
      header: "Active",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "isDefault",
      header: "Default",
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "countries",
      header: "Countries",
      cell: ({ row }) => {
        const countries = row.original.countries;

        if (!countries?.length) return "-";

        return countries.map((country) => country.name).join(", ");
      },
    },

    {
      id: "extra",
      header: "Extras",
      cell: ({ row }) => {
        const extra = row.original.extra;

        if (!extra?.length) return "-";

        return extra.map((item) => item.name).join(", ");
      },
    },

    {
      id: "package",
      header: "Packages",
      cell: ({ row }) => {
        const packages = row.original.package;

        if (!packages?.length) return "-";

        return packages.map((item) => item.name).join(", ");
      },
    },

    // ======================================================
    // MEDIA
    // ======================================================

    createDataTableColumn<Currency>({
      accessorKey: "thumbnail",
      header: "Thumbnail",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "coverImage",
      header: "Cover Image",
    }),

    createDataTableColumn<Currency>({
      accessorKey: "bannerImage",
      header: "Banner Image",
    }),

    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },

    createDataTableColumn<Currency>({
      accessorKey: "video",
      header: "Video",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<Currency>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<Currency>({
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
