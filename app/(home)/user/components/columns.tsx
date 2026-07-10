"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/type";
import { ActionMenu } from "../../../../components/form/action-menu";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

export const usersColumns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = row.original.image;
      return image ? (
        <img
          src={image}
          alt={row.original.name}
          className="h-10 w-10 rounded-full object-cover"
        />
      ) : (
        "-"
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "isTwoFactorEnabled",
    header: "2FA",
    cell: ({ row }) =>
      row.original.isTwoFactorEnabled ? "Enabled" : "Disabled",
  },
  {
    accessorKey: "emailVerified",
    header: "Email Verified",
    cell: ({ row }) =>
      row.original.emailVerified
        ? new Date(row.original.emailVerified).toLocaleString()
        : "-",
  },
  {
    accessorKey: "reSendemail",
    header: "Resend Email",
  },
  {
    accessorKey: "banUntil",
    header: "Ban Until",
    cell: ({ row }) =>
      row.original.banUntil
        ? new Date(row.original.banUntil).toLocaleString()
        : "-",
  },
  {
    accessorKey: "password",
    header: "Password",
    cell: ({ row }) => (row.original.password ? "********" : "OAuth"),
  },
  {
    id: "twoFactorConfirmation",
    header: "2FA Confirmation",
    cell: ({ row }) =>
      row.original.twoFactorConfirmation
        ? row.original.twoFactorConfirmation.id
        : "-",
  },
  {
    id: "account",
    header: "Account",
    cell: ({ row }) =>
      row.original.account
        ? `${row.original.account.provider} (${row.original.account.type})`
        : "-",
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <ActionMenu
        row={row.original}
        actions={[
          {
            label: "Copy ID",
            onClick: (user) => navigator.clipboard.writeText(user.id),
          },
          {
            separator: true,
            label: "Update",
            href: `/dashboard/users/${row.original.id}`,
          },
          {
            label: "Delete",
            danger: true,
            onClick: (user) => {
              console.log("Delete", user.id);
            },
          },
        ]}
      />
    ),
  },
];
