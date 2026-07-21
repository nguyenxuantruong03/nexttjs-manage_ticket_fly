import { z } from "zod";

export const BusPassengerPolicySchema = z.object({

  petsAllowed: z.boolean(),

  smokingAllowed: z.boolean(),

  foodAllowed: z.boolean(),

  alcoholAllowed: z.boolean(),

  wheelchairAccessible: z.boolean(),

  specialAssistanceAvailable: z.boolean(),
});

export type BusPassengerPolicyFormValues = z.infer<
  typeof BusPassengerPolicySchema
>;