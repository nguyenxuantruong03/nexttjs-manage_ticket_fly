import { z } from "zod";

import { BusTripPriceSchema } from "../pricing/trip-price.schema";

import { BusSeatAvailabilitySchema } from "./seat-availability.schema";
import { BusRouteStopSchema } from "./stop.schema";
import { BusSeatInventoryLockSchema } from "./inventory-lock.schema";
import { BusBoardingStatus, BusTripStatus } from "@/types/bookings/bus/enums";

export const BusTripSchema = z.object({
  vehicleId: z.string(),
  routeId: z.string(),

  seatAvailability: z.array(BusSeatAvailabilitySchema).optional(),

  stops: z.array(BusRouteStopSchema).optional(),

  locks: z.array(BusSeatInventoryLockSchema).optional(),

  departureTime: z.date(),

  arrivalTime: z.date(),

  status: z.nativeEnum(BusTripStatus),

  boardingStatus: z.nativeEnum(BusBoardingStatus),

  price: BusTripPriceSchema.nullable().optional(),
});

export type BusTripFormValues = z.infer<typeof BusTripSchema>;
