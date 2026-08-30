"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  ActionMenu,
  ActionMenuItem,
} from "../../../../components/ui/data-table/action-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { User } from "@/types/users/auth/users";

export function usersColumns(
  actions: (row: User) => ActionMenuItem<User>[],
): ColumnDef<User>[] {
  return [
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

    // ======================================================
    // Basic
    // ======================================================
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => (
        <span className="font-mono text-xs text-muted-foreground">
          {row.original.id}
        </span>
      ),
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

    // ======================================================
    // Security
    // ======================================================
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
      accessorKey: "hashedRefreshToken",
      header: "Refresh Token",
      cell: ({ row }) => (row.original.hashedRefreshToken ? "********" : "-"),
    },
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
    // Hotel
    // ======================================================
    {
      id: "hotelReviews",
      header: "Hotel Reviews",
      cell: ({ row }) => row.original.hotelReviews?.length ?? 0,
    },
    {
      id: "hotelBookings",
      header: "Hotel Bookings",
      cell: ({ row }) => row.original.hotelBookings?.length ?? 0,
    },
    {
      id: "hotelFavorite",
      header: "Hotel Favorites",
      cell: ({ row }) => row.original.hotelFavorite?.length ?? 0,
    },
    {
      id: "hotelUserLock",
      header: "Hotel Locks",
      cell: ({ row }) => row.original.hotelUserLock?.length ?? 0,
    },

    // ======================================================
    // Car Rental
    // ======================================================
    {
      id: "carrentalReviews",
      header: "Car Rental Reviews",
      cell: ({ row }) => row.original.carrentalReviews?.length ?? 0,
    },
    {
      id: "carRentalBooking",
      header: "Car Rental Bookings",
      cell: ({ row }) => row.original.carRentalBooking?.length ?? 0,
    },
    {
      id: "carRentalFavorite",
      header: "Car Rental Favorites",
      cell: ({ row }) => row.original.carRentalFavorite?.length ?? 0,
    },
    {
      id: "carRentalLock",
      header: "Car Rental Locks",
      cell: ({ row }) => row.original.carRentalLock?.length ?? 0,
    },

    // ======================================================
    // Bus
    // ======================================================
    {
      id: "busesReviews",
      header: "Bus Reviews",
      cell: ({ row }) => row.original.busesReviews?.length ?? 0,
    },
    {
      id: "BusFavorite",
      header: "Bus Favorites",
      cell: ({ row }) => row.original.BusFavorite?.length ?? 0,
    },
    {
      id: "BusBooking",
      header: "Bus Bookings",
      cell: ({ row }) => row.original.BusBooking?.length ?? 0,
    },
    {
      id: "busUserLock",
      header: "Bus Locks",
      cell: ({ row }) => row.original.busUserLock?.length ?? 0,
    },

    // ======================================================
    // Airport Transfer
    // ======================================================
    {
      id: "airportTransferReviews",
      header: "Airport Transfer Reviews",
      cell: ({ row }) => row.original.airportTransferReviews?.length ?? 0,
    },
    {
      id: "airporttransferFavorite",
      header: "Airport Transfer Favorites",
      cell: ({ row }) => row.original.airporttransferFavorite?.length ?? 0,
    },
    {
      id: "airportTransferBooking",
      header: "Airport Transfer Bookings",
      cell: ({ row }) => row.original.airportTransferBooking?.length ?? 0,
    },
    {
      id: "airportTransferLock",
      header: "Airport Transfer Locks",
      cell: ({ row }) => row.original.airportTransferLock?.length ?? 0,
    },

    // ======================================================
    // Yacht
    // ======================================================
    {
      id: "yachtReviews",
      header: "Yacht Reviews",
      cell: ({ row }) => row.original.yachtReviews?.length ?? 0,
    },
    {
      id: "yachtFavorite",
      header: "Yacht Favorites",
      cell: ({ row }) => row.original.yachtFavorite?.length ?? 0,
    },
    {
      id: "yachtBooking",
      header: "Yacht Bookings",
      cell: ({ row }) => row.original.yachtBooking?.length ?? 0,
    },
    {
      id: "yachtLock",
      header: "Yacht Locks",
      cell: ({ row }) => row.original.yachtLock?.length ?? 0,
    },

    // ======================================================
    // Fly
    // ======================================================
    {
      id: "airlineRating",
      header: "Airline Ratings",
      cell: ({ row }) => row.original.airlineRating?.length ?? 0,
    },
    {
      id: "flyFavorite",
      header: "Fly Favorites",
      cell: ({ row }) => row.original.flyFavorite?.length ?? 0,
    },
    {
      id: "flyBooking",
      header: "Fly Bookings",
      cell: ({ row }) => row.original.flyBooking?.length ?? 0,
    },
    {
      id: "flyLock",
      header: "Fly Locks",
      cell: ({ row }) => row.original.flyLock?.length ?? 0,
    },
    {
      id: "flyseatLock",
      header: "Fly Seat Locks",
      cell: ({ row }) => row.original.flyseatLock?.length ?? 0,
    },

    // ======================================================
    // Other
    // ======================================================
    {
      id: "wishlists",
      header: "Wishlists",
      cell: ({ row }) => row.original.wishlists?.length ?? 0,
    },
    {
      id: "payment",
      header: "Payments",
      cell: ({ row }) => row.original.payment?.length ?? 0,
    },
    {
      id: "promotions",
      header: "Promotions Used",
      cell: ({ row }) => row.original.promotions?.length ?? 0,
    },
    {
      id: "coupons",
      header: "Coupons Used",
      cell: ({ row }) => row.original.coupons?.length ?? 0,
    },

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
