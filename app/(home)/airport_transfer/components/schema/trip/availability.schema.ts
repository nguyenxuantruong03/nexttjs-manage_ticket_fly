import { z } from "zod";

import { AirportTransferAvailabilityCalendarSchema } from "./availability-calendar.schema";

import { AirportTransferBlackoutDateSchema } from "./blackout.schema";

import { AirportTransferInventoryLockSchema } from "./inventory-lock.schema";

export const AirportTransferAvailabilitySchema = z.object({
  available: z.boolean().default(true),

  calendars: z.array(AirportTransferAvailabilityCalendarSchema),

  locks: z.array(AirportTransferInventoryLockSchema),

  blackoutDates: z.array(AirportTransferBlackoutDateSchema),
});
