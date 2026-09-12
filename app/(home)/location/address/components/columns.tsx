"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { Address } from "@/types/location/address";

import { ColumnDef } from "@tanstack/react-table";

export function addressColumns(
  actions: (row: Address) => ActionMenuItem<Address>[],
): ColumnDef<Address>[] {
  return [
    createSelectionColumn<Address>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<Address>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<Address>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<Address>({
      accessorKey: "houseNumber",
      header: "House Number",
    }),

    createDataTableColumn<Address>({
      accessorKey: "street",
      header: "Street",
    }),

    // ======================================================
    // LOCATION
    // ======================================================

    createDataTableColumn<Address>({
      accessorKey: "district",
      header: "District",
      cell: (row) => row.district?.name ?? "-",
    }),

    createDataTableColumn<Address>({
      accessorKey: "city",
      header: "City",
      cell: (row) => row.city?.name ?? "-",
    }),

    createDataTableColumn<Address>({
      accessorKey: "country",
      header: "Country",
      cell: (row) => row.country?.name ?? "-",
    }),

    createDataTableColumn<Address>({
      accessorKey: "postcode",
      header: "Postcode",
    }),

    createDataTableColumn<Address>({
      accessorKey: "latitude",
      header: "Latitude",
    }),

    createDataTableColumn<Address>({
      accessorKey: "longitude",
      header: "Longitude",
    }),

    createDataTableColumn<Address>({
      accessorKey: "plusCode",
      header: "Plus Code",
    }),

    createDataTableColumn<Address>({
      accessorKey: "precision",
      header: "Precision",
    }),

    createDataTableColumn<Address>({
      accessorKey: "verified",
      header: "Verified",
    }),

    createDataTableColumn<Address>({
      accessorKey: "active",
      header: "Active",
    }),

    // ======================================================
    // MEDIA
    // ======================================================

    createDataTableColumn<Address>({
      accessorKey: "thumbnail",
      header: "Thumbnail",
    }),

    createDataTableColumn<Address>({
      accessorKey: "coverImage",
      header: "Cover Image",
    }),

    createDataTableColumn<Address>({
      accessorKey: "bannerImage",
      header: "Banner Image",
    }),

    {
      id: "images",
      header: "Images",
      cell: ({ row }) => row.original.images?.length ?? 0,
    },

    createDataTableColumn<Address>({
      accessorKey: "video",
      header: "Video",
    }),

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<Address>({
      accessorKey: "createdAt",
      header: "Created At",
    }),

    createDataTableColumn<Address>({
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
