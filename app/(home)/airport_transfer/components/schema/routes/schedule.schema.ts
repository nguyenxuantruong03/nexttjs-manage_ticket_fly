import { z } from "zod";

import { WeekDay } from "@/types/common/enums";

export const AirportTransferScheduleSchema = z.object({
  departureTime: z.string(),

  operatingDays: z.array(z.nativeEnum(WeekDay)),

  startDate: z.string(),

  endDate: z.string().optional(),

  active: z.boolean().default(true),
});
