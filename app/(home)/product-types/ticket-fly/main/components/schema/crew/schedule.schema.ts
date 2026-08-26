import { z } from "zod";

export const FlyCrewScheduleSchema = z.object({
  crewId: z.string(),

  startTime: z.date(),
  endTime: z.date(),

  dutyId: z.string(),

  tripId: z.string().optional(),
});

export type FlyCrewScheduleFormValues = z.infer<typeof FlyCrewScheduleSchema>;