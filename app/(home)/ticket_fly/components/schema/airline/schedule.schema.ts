import { z } from "zod";

import { WeekDay } from "@/types/common/enums";

export const FlyScheduleSchema = z.object({
  departureTime: z.string(),

  arrivalTime: z.string(),

  startDate: z.date(),

  endDate: z.date().optional(),

  operatingDays: z.array(z.nativeEnum(WeekDay)),

  aircraftId: z.string().optional(),

  active: z.boolean(),
});

export type FlyScheduleFormValues = z.infer<typeof FlyScheduleSchema>;
