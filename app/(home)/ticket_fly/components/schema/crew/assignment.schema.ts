import { z } from "zod";

import { FlyCrewDuty } from "@/types/bookings/ticket-fly/enums";

export const FlyCrewAssignmentSchema = z.object({
  crewId: z.string().optional(),

  tripId: z.string(),

  inventoryId: z.string(),

  duty: z.nativeEnum(FlyCrewDuty),
});

export type FlyCrewAssignmentFormValues = z.infer<
  typeof FlyCrewAssignmentSchema
>;
