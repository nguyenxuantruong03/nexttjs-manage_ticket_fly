"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Currency } from "@/types/location/currency";
import { ColumnDef } from "@tanstack/react-table";

export function currencyColumns(
  actions: (row: Currency) => ActionMenuItem<Currency>[],
): ColumnDef<Currency>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "code",
      header: "Code",
    },
    {
      accessorKey: "numericCode",
      header: "Numeric Code",
      cell: ({ row }) => row.original.numericCode ?? "-",
    },
    {
      accessorKey: "symbol",
      header: "Symbol",
      cell: ({ row }) => row.original.symbol ?? "-",
    },
    {
      accessorKey: "symbolNative",
      header: "Native Symbol",
      cell: ({ row }) => row.original.symbolNative ?? "-",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "nativeName",
      header: "Native Name",
      cell: ({ row }) => row.original.nativeName ?? "-",
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
      cell: ({ row }) => row.original.flagEmoji ?? "-",
    },
    {
      accessorKey: "locale",
      header: "Locale",
      cell: ({ row }) => row.original.locale ?? "-",
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

    {
      accessorKey: "thumbnail",
      header: "Thumbnail",
    },
    {
      accessorKey: "coverImage",
      header: "Cover Image",
    },
    {
      accessorKey: "bannerImage",
      header: "Banner Image",
    },
    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },
    {
      accessorKey: "video",
      header: "Video",
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
