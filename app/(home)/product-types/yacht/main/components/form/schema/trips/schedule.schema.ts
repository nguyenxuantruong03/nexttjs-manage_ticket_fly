// schema/trips/schedule.schema.ts

import { YachtRepeatType } from "@/types/product-types/yacht/enums";
import { z } from "zod";

export const YachtScheduleSchema = z.object({
  tripId: z.string(),

  repeatType: z.nativeEnum(YachtRepeatType),

  daysOfWeek: z.array(z.number()).default([]),

  startDate: z.date().nullable().optional(),

  endDate: z.date().nullable().optional(),

  departureTime: z.string().nullable().optional(),
});

export type YachtScheduleFormValues = z.infer<typeof YachtScheduleSchema>;
