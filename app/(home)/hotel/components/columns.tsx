"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/bookings/auth/users";
import { ActionMenu } from "../../../../components/form/action-menu";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Hotel } from "@/types/bookings/hotel/core/hotel.types";

export const hotelColumns: ColumnDef<Hotel>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "cityId",
    header: "City",
  },

  // Information
  {
    accessorKey: "information.providerBookingId",
    header: "Provider Booking",
  },
  {
    accessorKey: "information.addressId",
    header: "Address",
  },

  // Room Summary
  {
    accessorKey: "inventory.0.roomSummary.name",
    header: "Room",
  },
  {
    accessorKey: "inventory.0.roomSummary.description",
    header: "Description",
  },
  {
    accessorKey: "inventory.0.roomSummary.totalRooms",
    header: "Rooms",
  },
  {
    accessorKey: "inventory.0.roomSummary.totalRoomTypes",
    header: "Room Types",
  },
  {
    accessorKey: "inventory.0.roomSummary.maxGuests",
    header: "Guests",
  },
  {
    accessorKey: "inventory.0.roomSummary.maxAdults",
    header: "Adults",
  },
  {
    accessorKey: "inventory.0.roomSummary.maxChildren",
    header: "Children",
  },

  // Price
  {
    accessorKey: "inventory.0.price.currency",
    header: "Currency",
  },
  {
    accessorKey: "inventory.0.price.originalPrice",
    header: "Original Price",
  },
  {
    accessorKey: "inventory.0.price.finalPrice",
    header: "Final Price",
  },
  {
    accessorKey: "inventory.0.price.averageNightlyPrice",
    header: "Nightly Price",
  },

  // Availability
  {
    accessorKey: "inventory.0.availability.isAvailable",
    header: "Available",
  },
  {
    accessorKey: "inventory.0.availability.availableRooms",
    header: "Available Rooms",
  },
  {
    accessorKey: "inventory.0.availability.lastUpdated",
    header: "Availability Updated",
  },

  // Images
  {
    accessorKey: "inventory.0.image.thumbnail",
    header: "Thumbnail",
  },
  {
    accessorKey: "inventory.0.image.cover",
    header: "Cover",
  },
  {
    accessorKey: "inventory.0.image.hero",
    header: "Hero",
  },

  // Policies
  {
    accessorKey: "policies.checkIn.checkInTime",
    header: "Check In",
  },
  {
    accessorKey: "policies.checkIn.checkOutTime",
    header: "Check Out",
  },
  {
    accessorKey: "policies.guest.minimumAge",
    header: "Minimum Age",
  },
  {
    accessorKey: "policies.guest.childrenAllowed",
    header: "Children",
  },
  {
    accessorKey: "policies.guest.petsAllowed",
    header: "Pets",
  },
  {
    accessorKey: "policies.cancellation.refundable",
    header: "Refundable",
  },
  {
    accessorKey: "policies.booking.instantConfirmation",
    header: "Instant Confirmation",
  },

  // Facilities
  {
    accessorKey: "facilities.wifi.available",
    header: "WiFi",
  },
  {
    accessorKey: "facilities.parking.available",
    header: "Parking",
  },
  {
    accessorKey: "facilities.swimmingPool.available",
    header: "Pool",
  },
  {
    accessorKey: "facilities.gym.available",
    header: "Gym",
  },
  {
    accessorKey: "facilities.spa.available",
    header: "Spa",
  },
  {
    accessorKey: "facilities.bar",
    header: "Bar",
  },
  {
    accessorKey: "facilities.roomService",
    header: "Room Service",
  },
  {
    accessorKey: "facilities.familyRoom",
    header: "Family Room",
  },
  {
    accessorKey: "facilities.transportation.airportShuttle",
    header: "Airport Shuttle",
  },

  // Review
  {
    accessorKey: "reviews.0.overallRating",
    header: "Rating",
  },
  {
    accessorKey: "reviews.0.comment",
    header: "Review",
  },
  {
    accessorKey: "reviews.0.verified",
    header: "Verified",
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
];
