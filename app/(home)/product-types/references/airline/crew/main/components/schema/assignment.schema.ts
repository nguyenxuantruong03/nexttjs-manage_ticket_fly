import { z } from "zod";

export const FlyCrewAssignmentSchema = z.object({

  tripId: z.string(),

  inventoryId: z.string(),

  dutyId: z.string(),
});

export type FlyCrewAssignmentFormValues = z.infer<
  typeof FlyCrewAssignmentSchema
>;
