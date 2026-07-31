// schema.ts

import { z } from "zod";

export const TimezoneSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Timezone name is required"),

  displayName: z.string().trim().nullable().optional(),

  abbreviation: z.string().trim().nullable().optional(),

  utcOffset: z.string().trim().min(1, "UTC offset is required"),

  utcOffsetMinutes: z.coerce
    .number()
    .int("UTC offset minutes must be an integer"),

  daylightSaving: z.boolean().default(false),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),
});

export type TimezoneFormSchema = z.infer<typeof TimezoneSchema>;
