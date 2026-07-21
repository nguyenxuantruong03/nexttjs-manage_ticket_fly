// schema/trips/trip.schema.ts

import { z } from "zod";

import { YachtTripStatus } from "@/types/bookings/yacht/enums";

import { YachtInventoryLockSchema } from "./inventory-lock.schema";
import { YachtScheduleSchema } from "./schedule.schema";
import { YachtTripPriceSchema } from "./trip-price.schema";

export const YachtTripSchema = z.object({

  routeId: z.string().nullable().optional(),

  bookings: z.array(z.any()).default([]),

  departureTime: z.date(),

  arrivalTime: z.date(),

  status: z.nativeEnum(YachtTripStatus),

  maxGuests: z.number().nullable().optional(),

  schedule: YachtScheduleSchema.nullable().optional(),

  price: YachtTripPriceSchema.nullable().optional(),

  locks: z.array(YachtInventoryLockSchema).default([]),
});

export type YachtTripFormValues = z.infer<
  typeof YachtTripSchema
>;