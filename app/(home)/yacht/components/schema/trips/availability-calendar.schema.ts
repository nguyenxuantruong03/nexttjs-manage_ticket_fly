// schema/trips/availability-calendar.schema.ts

import { z } from "zod";

export const YachtAvailabilityCalendarSchema = z.object({
  availabilityId: z.string(),

  date: z.date(),

  available: z.boolean(),

  booked: z.boolean(),

  stopSell: z.boolean(),
});

export type YachtAvailabilityCalendarFormValues = z.infer<
  typeof YachtAvailabilityCalendarSchema
>;
