import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { TaxRule } from "@/types/common/commerce/compliance-legal.type";

export function taxRuleColumns(
  actions: (row: TaxRule) => ActionMenuItem<TaxRule>[],
): ColumnDef<TaxRule>[] {
  return [
    // ======================================================
    // SELECT
    // ======================================================

    createSelectionColumn<TaxRule>(),

    // ======================================================
    // ID
    // ======================================================

    createDataTableColumn<TaxRule>({
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
    // COUNTRY
    // ======================================================

    createDataTableColumn<TaxRule>({
      accessorKey: "countryId",

      header: "Countries",

      exclude: ["sorting", "filtering"],

      meta: {
        exportLabel: "Countries",
      },

      cell: (row) => {
        const countries = row.countryId;

        if (!countries?.length) {
          return "-";
        }

        return countries.join(", ");
      },

      exportValue: (row) => row.countryId?.join(", ") ?? "",
    }),

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    createDataTableColumn<TaxRule>({
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
    // TAX
    // ======================================================

    createDataTableColumn<TaxRule>({
      accessorKey: "taxPercent",

      header: "Tax Percent",

      meta: {
        align: "right",
        filterVariant: "number",
        exportLabel: "Tax Percent",
      },

      cell: (row) => `${row.taxPercent}%`,

      exportValue: (row) => row.taxPercent,
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<TaxRule>({
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
    // EFFECTIVE PERIOD
    // ======================================================

    createDataTableColumn<TaxRule>({
      accessorKey: "effectiveFrom",

      header: "Effective From",

      exclude: ["filtering"],

      meta: {
        exportLabel: "Effective From",
      },

      cell: (row) => new Date(row.effectiveFrom).toLocaleString(),

      exportValue: (row) => new Date(row.effectiveFrom).toLocaleString(),
    }),

    createDataTableColumn<TaxRule>({
      accessorKey: "effectiveTo",

      header: "Effective To",

      exclude: ["filtering"],

      meta: {
        exportLabel: "Effective To",
      },

      cell: (row) =>
        row.effectiveTo ? new Date(row.effectiveTo).toLocaleString() : "-",

      exportValue: (row) =>
        row.effectiveTo ? new Date(row.effectiveTo).toLocaleString() : "",
    }),

    // ======================================================
    // TIMESTAMPS
    // ======================================================

    createDataTableColumn<TaxRule>({
      accessorKey: "createdAt",

      header: "Created At",

      exclude: ["filtering"],

      meta: {
        exportLabel: "Created At",
      },

      cell: (row) => new Date(row.createdAt).toLocaleString(),

      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<TaxRule>({
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
