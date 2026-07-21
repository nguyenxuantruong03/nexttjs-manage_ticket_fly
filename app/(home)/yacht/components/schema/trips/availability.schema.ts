// schema/trips/availability.schema.ts

import { z } from "zod";

import { YachtAvailabilityCalendarSchema } from "./availability-calendar.schema";
import { YachtInventoryLockSchema } from "./inventory-lock.schema";

export const YachtAvailabilitySchema = z.object({

  calendar: z.array(YachtAvailabilityCalendarSchema).default([]),

  locks: z.array(YachtInventoryLockSchema).default([]),
});

export type YachtAvailabilityFormValues = z.infer<
  typeof YachtAvailabilitySchema
>;
