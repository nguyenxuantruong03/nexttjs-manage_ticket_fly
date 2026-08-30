import { z } from "zod";

import { BusTripPriceSchema } from "../pricing/trip-price.schema";

import { BusSeatAvailabilitySchema } from "./seat-availability.schema";
import { BusRouteStopSchema } from "./stop.schema";
import { BusBoardingStatus, BusTripStatus } from "@/types/product-types/bus/enums";

export const BusTripSchema = z.object({
  vehicleId: z.string(),
  routeId: z.string(),

  seatAvailability: z.array(BusSeatAvailabilitySchema).optional(),

  stops: z.array(BusRouteStopSchema).optional(),

  departureTime: z.string(),

  arrivalTime: z.string(),

  status: z.nativeEnum(BusTripStatus),

  boardingStatus: z.nativeEnum(BusBoardingStatus),

  price: BusTripPriceSchema.nullable().optional(),
});

export type BusTripFormValues = z.infer<typeof BusTripSchema>;
