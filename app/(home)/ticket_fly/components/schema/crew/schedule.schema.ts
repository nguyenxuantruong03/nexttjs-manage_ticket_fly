import { z } from "zod";

import { FlyCrewDuty } from "@/types/bookings/ticket-fly/enums";

export const FlyCrewScheduleSchema = z.object({
  startTime: z.date(),

  endTime: z.date(),

  duty: z.nativeEnum(FlyCrewDuty),

  tripId: z.string().optional(),
});

export type FlyCrewScheduleFormValues = z.infer<typeof FlyCrewScheduleSchema>;
