"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ActionMenu,
  ActionMenuItem,
} from "../../../../components/ui/data-table/action-menu";
import { Badge } from "@/components/ui/badge";
import {
  ProviderBooking,
  typeServiceBooking,
} from "@/types/bookings/provider-bookings";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RowActions } from "@/components/ui/data-table/row-actions";

export function providerBookingColumns(
  actions: (row: ProviderBooking) => ActionMenuItem<ProviderBooking>[],
): ColumnDef<ProviderBooking>[] {
  return [
    // Select
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },

    // Basic
    {
      accessorKey: "logo",
      header: "Logo",
      cell: ({ row }) => (
        <Avatar className="h-12 w-12 rounded-lg">
          <AvatarImage
            src={row.original.logo ?? ""}
            alt={row.original.displayName}
            className="object-cover"
          />
          <AvatarFallback>
            {row.original.displayName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ),
    },
    {
      accessorKey: "banner",
      header: "Banner",
      cell: ({ row }) => (
        <Avatar className="h-12 w-20 rounded-md">
          <AvatarImage
            src={row.original.banner ?? ""}
            alt={row.original.displayName}
            className="object-cover"
          />
          <AvatarFallback>
            {row.original.displayName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ),
    },
    {
      accessorKey: "officialName",
      header: "Official Name",
    },
    {
      accessorKey: "displayName",
      header: "Display Name",
    },
    {
      accessorKey: "shortName",
      header: "Short Name",
    },
    {
      accessorKey: "subtitle",
      header: "Subtitle",
    },
    {
      accessorKey: "description",
      header: "Description",
    },

    // Company
    {
      accessorKey: "companyType",
      header: "Company Type",
    },
    {
      accessorKey: "registrationNumber",
      header: "Registration Number",
    },
    {
      accessorKey: "taxCode",
      header: "Tax Code",
    },
    {
      accessorKey: "licenseNumber",
      header: "License Number",
    },
    {
      accessorKey: "foundedYear",
      header: "Founded Year",
    },
    {
      accessorKey: "employeeCount",
      header: "Employees",
    },

    // Contact
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "hotline",
      header: "Hotline",
    },
    {
      accessorKey: "website",
      header: "Website",
    },

    // Address
    {
      accessorKey: "address",
      header: "Address",
    },
    {
      accessorKey: "city",
      header: "City",
    },
    {
      accessorKey: "state",
      header: "State",
    },
    {
      accessorKey: "country",
      header: "Country",
    },
    {
      accessorKey: "postalCode",
      header: "Postal Code",
    },
    {
      accessorKey: "latitude",
      header: "Latitude",
    },
    {
      accessorKey: "longitude",
      header: "Longitude",
    },

    // Social
    {
      accessorKey: "facebook",
      header: "Facebook",
    },
    {
      accessorKey: "instagram",
      header: "Instagram",
    },
    {
      accessorKey: "youtube",
      header: "YouTube",
    },
    {
      accessorKey: "linkedin",
      header: "LinkedIn",
    },

    // Rating
    {
      accessorKey: "averageRating",
      header: "Average Rating",
    },
    {
      accessorKey: "totalRatings",
      header: "Total Ratings",
    },
    {
      accessorKey: "totalReviews",
      header: "Total Reviews",
    },
    {
      accessorKey: "fiveStarCount",
      header: "5★",
    },
    {
      accessorKey: "fourStarCount",
      header: "4★",
    },
    {
      accessorKey: "threeStarCount",
      header: "3★",
    },
    {
      accessorKey: "twoStarCount",
      header: "2★",
    },
    {
      accessorKey: "oneStarCount",
      header: "1★",
    },

    // Booking
    {
      accessorKey: "totalBookings",
      header: "Total Bookings",
    },
    {
      accessorKey: "completedBookings",
      header: "Completed",
    },
    {
      accessorKey: "cancelledBookings",
      header: "Cancelled",
    },
    {
      accessorKey: "totalCustomers",
      header: "Customers",
    },

    // Services
    {
      accessorKey: "service",
      header: "Service",
      cell: ({ row }) => {
        const services = row.original.service;

        return (
          <div className="flex flex-wrap gap-1">
            {services?.map((service: typeServiceBooking) => (
              <Badge key={service} variant="secondary">
                {service}
              </Badge>
            ))}
          </div>
        );
      },
    },

    // Status
    {
      accessorKey: "verified",
      header: "Verified",
    },
    {
      accessorKey: "status",
      header: "Status",
    },

    // Time
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
