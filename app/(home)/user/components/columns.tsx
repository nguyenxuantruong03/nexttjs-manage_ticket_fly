"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { RowActions } from "@/components/ui/data-table/row-actions";

import { User } from "@/types/users/auth/users";

import { MediaPreview } from "@/components/common/image/media-preview";

export function usersColumns(
  actions: (row: User) => ActionMenuItem<User>[],
): ColumnDef<User>[] {
  return [
    createSelectionColumn<User>(),

    // ======================================================
    // Basic
    // ======================================================

    createDataTableColumn<User>({
      accessorKey: "id",
      header: "ID",
      cell: (row) => (
        <span className="font-mono text-xs text-muted-foreground">
          {row.id}
        </span>
      ),
    }),

    createDataTableColumn<User>({
      accessorKey: "image",
      header: "Image",
      cell: (row) => {
        const media = row;

        return (
          <MediaPreview
            path={media.image}
            name={media.name ?? media.image}
            className="h-10 w-10 rounded-md"
          />
        );
      },
    }),

    createDataTableColumn<User>({
      accessorKey: "name",
      header: "Name",
    }),

    createDataTableColumn<User>({
      accessorKey: "email",
      header: "Email",
    }),

    createDataTableColumn<User>({
      accessorKey: "role",
      header: "Role",
    }),

    // ======================================================
    // Security
    // ======================================================

    createDataTableColumn<User>({
      accessorKey: "isTwoFactorEnabled",
      header: "2FA",
      cell: (row) => (row.isTwoFactorEnabled ? "Enabled" : "Disabled"),
    }),

    createDataTableColumn<User>({
      accessorKey: "emailVerified",
      header: "Email Verified",
      cell: (row) =>
        row.emailVerified ? new Date(row.emailVerified).toLocaleString() : "-",
    }),

    createDataTableColumn<User>({
      accessorKey: "reSendemail",
      header: "Resend Email",
    }),

    createDataTableColumn<User>({
      accessorKey: "banUntil",
      header: "Ban Until",
      cell: (row) =>
        row.banUntil ? new Date(row.banUntil).toLocaleString() : "-",
    }),

    createDataTableColumn<User>({
      accessorKey: "password",
      header: "Password",
      cell: (row) => (row.password ? "********" : "OAuth"),
    }),

    createDataTableColumn<User>({
      accessorKey: "hashedRefreshToken",
      header: "Refresh Token",
      cell: (row) => (row.hashedRefreshToken ? "********" : "-"),
    }),

    // ======================================================
    // 2FA Confirmation
    // ======================================================

    {
      id: "twoFactorConfirmation",
      header: "2FA Confirmation",
      cell: ({ row }) =>
        row.original.twoFactorConfirmation
          ? row.original.twoFactorConfirmation.id
          : "-",
    },

    // ======================================================
    // OAuth
    // ======================================================

    {
      id: "account",
      header: "Account",
      cell: ({ row }) =>
        row.original.account
          ? `${row.original.account.provider} (${row.original.account.type})`
          : "-",
    },

    {
      id: "providers",
      header: "Providers",
      cell: ({ row }) => row.original.providers?.length ?? 0,
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
