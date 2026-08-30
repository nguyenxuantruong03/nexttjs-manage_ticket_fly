// schema/trips/trip.schema.ts

import { z } from "zod";

import { YachtScheduleSchema } from "./schedule.schema";
import { YachtTripPriceSchema } from "./trip-price.schema";
import { YachtTripStatus } from "@/types/product-types/yacht/enums";

export const YachtTripSchema = z.object({
  routeId: z.string().nullable().optional(),

  departureTime: z.date(),

  arrivalTime: z.date(),

  status: z.nativeEnum(YachtTripStatus),

  maxGuests: z.number().nullable().optional(),

  schedule: YachtScheduleSchema.nullable().optional(),

  price: YachtTripPriceSchema.nullable().optional(),
});

export type YachtTripFormValues = z.infer<typeof YachtTripSchema>;
