import { z } from "zod";

import { WeekDay } from "@/types/common/enums";

export const AirportTransferScheduleSchema = z.object({
  // ======================================================
  // SCHEDULE INFO
  // ======================================================

  departureTime: z.string(),

  operatingDays: z.array(z.nativeEnum(WeekDay)).default([]),

  startDate: z.string(),

  endDate: z.string().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),
});

export type AirportTransferScheduleFormSchema = z.infer<
  typeof AirportTransferScheduleSchema
>;
