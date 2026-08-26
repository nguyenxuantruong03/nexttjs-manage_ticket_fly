import { z } from "zod";

import { WeekDay } from "@/types/common/enums";

import { FlyTripSchema } from "../trip/trip.schema";

// ======================================================
// SCHEDULE
// ======================================================

export const FlyScheduleSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  aircraftId: z.string().optional(),

  trips: z.array(FlyTripSchema).optional(),

  // ======================================================
  // TIME
  // ======================================================

  departureTime: z.string(),

  arrivalTime: z.string(),

  // ======================================================
  // PERIOD
  // ======================================================

  startDate: z.date(),

  endDate: z.date().optional(),

  // ======================================================
  // OPERATING DAYS
  // ======================================================

  operatingDays: z.array(z.nativeEnum(WeekDay)),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type FlyScheduleFormValues = z.infer<typeof FlyScheduleSchema>;
