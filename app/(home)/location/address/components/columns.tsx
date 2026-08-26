"use client";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { Address } from "@/types/location/address";
import { ColumnDef } from "@tanstack/react-table";

export function addressColumns(
  actions: (row: Address) => ActionMenuItem<Address>[],
): ColumnDef<Address>[] {
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
      accessorKey: "houseNumber",
      header: "House Number",
    },
    {
      accessorKey: "street",
      header: "Street",
    },

    // ======================================================
    // LOCATION
    // ======================================================

    {
      accessorKey: "ward.name",
      header: "Ward",
    },
    {
      accessorKey: "district.name",
      header: "District",
    },
    {
      accessorKey: "city.name",
      header: "City",
    },
    {
      accessorKey: "country.name",
      header: "Country",
    },
    {
      accessorKey: "postcode",
      header: "Postcode",
    },
    {
      accessorKey: "latitude",
      header: "Latitude",
    },
    {
      accessorKey: "longitude",
      header: "Longitude",
    },
    {
      accessorKey: "plusCode",
      header: "Plus Code",
    },
    {
      accessorKey: "precision",
      header: "Precision",
    },

    {
      accessorKey: "verified",
      header: "Verified",
    },
    {
      accessorKey: "active",
      header: "Active",
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

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
