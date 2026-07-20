"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/bookings/auth/users";
import { ActionMenu } from "../../../../components/form/action-menu";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { CarRental } from "@/types/bookings/car_rental/core/car-rental.types";

export const carRentalColumns: ColumnDef<CarRental>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "driverOption",
    header: "Driver Option",
  },
  {
    accessorKey: "providerBookingId",
    header: "Provider Booking",
  },

  // Vehicle
  {
    accessorKey: "vehicle.brand",
    header: "Brand",
  },
  {
    accessorKey: "vehicle.model",
    header: "Model",
  },
  {
    accessorKey: "vehicle.type",
    header: "Vehicle Type",
  },
  {
    accessorKey: "vehicle.status",
    header: "Status",
  },
  {
    accessorKey: "vehicle.year",
    header: "Year",
  },
  {
    accessorKey: "vehicle.color",
    header: "Color",
  },
  {
    accessorKey: "vehicle.transmission",
    header: "Transmission",
  },
  {
    accessorKey: "vehicle.fuelType",
    header: "Fuel Type",
  },
  {
    accessorKey: "vehicle.licensePlate",
    header: "License Plate",
  },
  {
    accessorKey: "vehicle.images.0",
    header: "Image",
  },

  // Capacity
  {
    accessorKey: "vehicle.capacity.seatCount",
    header: "Seats",
  },
  {
    accessorKey: "vehicle.capacity.luggageCount",
    header: "Luggage",
  },
  {
    accessorKey: "vehicle.capacity.doorCount",
    header: "Doors",
  },

  // Pickup
  {
    accessorKey: "trip.pickupLocation.pickup",
    header: "Pickup",
  },
  {
    accessorKey: "trip.pickupLocation.type",
    header: "Pickup Type",
  },

  // Dropoff
  {
    accessorKey: "trip.dropoffLocation.dropoff",
    header: "Dropoff",
  },
  {
    accessorKey: "trip.dropoffLocation.type",
    header: "Dropoff Type",
  },

  // Schedule
  {
    accessorKey: "trip.schedule.durationType",
    header: "Duration",
  },
  {
    accessorKey: "trip.schedule.pickupTime",
    header: "Pickup Time",
  },
  {
    accessorKey: "trip.schedule.returnTime",
    header: "Return Time",
  },

  // Price
  {
    accessorKey: "price.pricePerHour",
    header: "Price / Hour",
  },
  {
    accessorKey: "price.pricePerDay",
    header: "Price / Day",
  },
  {
    accessorKey: "price.pricePerWeek",
    header: "Price / Week",
  },
  {
    accessorKey: "price.pricePerMonth",
    header: "Price / Month",
  },
  {
    accessorKey: "price.originalPrice",
    header: "Original Price",
  },
  {
    accessorKey: "price.finalPrice",
    header: "Final Price",
  },

  // Policy
  {
    accessorKey: "policies.fuelPolicy",
    header: "Fuel Policy",
  },
  {
    accessorKey: "policies.mileage.unlimited",
    header: "Unlimited Mileage",
  },
  {
    accessorKey: "policies.rules.minimumAge",
    header: "Minimum Age",
  },
  {
    accessorKey: "policies.rules.additionalDriverAllowed",
    header: "Additional Driver",
  },

  // Review (ví dụ lấy review đầu tiên)
  {
    accessorKey: "review.0.overallRating",
    header: "Rating",
  },
  {
    accessorKey: "review.0.comment",
    header: "Review",
  },
  {
    accessorKey: "review.0.verified",
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
