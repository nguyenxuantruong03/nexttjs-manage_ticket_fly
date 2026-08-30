// schema/trips/availability.schema.ts

import { z } from "zod";

import { YachtAvailabilityCalendarSchema } from "./availability-calendar.schema";

export const YachtAvailabilitySchema = z.object({

  calendar: z.array(YachtAvailabilityCalendarSchema).default([]),
});

export type YachtAvailabilityFormValues = z.infer<
  typeof YachtAvailabilitySchema
>;
