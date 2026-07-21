// schema/trips/schedule.schema.ts

import { z } from "zod";

import { YachtRepeatType } from "@/types/bookings/yacht/enums";

export const YachtScheduleSchema = z.object({
  tripId: z.string(),

  repeatType: z.nativeEnum(YachtRepeatType),

  daysOfWeek: z.array(z.number()).default([]),

  startDate: z.date().nullable().optional(),

  endDate: z.date().nullable().optional(),

  departureTime: z.string().nullable().optional(),
});

export type YachtScheduleFormValues = z.infer<
  typeof YachtScheduleSchema
>;