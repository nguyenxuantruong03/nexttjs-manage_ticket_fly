import { z } from "zod";

import { AirportTransferBlackoutDateSchema } from "./blackout.schema";

import { AirportTransferAvailabilityCalendarSchema } from "./calendar.schema";

export const AirportTransferAvailabilitySchema = z.object({
  available: z.boolean(),

  calendars: z.array(AirportTransferAvailabilityCalendarSchema),

  blackoutDates: z.array(AirportTransferBlackoutDateSchema),
});

export type AirportTransferAvailability = z.infer<
  typeof AirportTransferAvailabilitySchema
>;