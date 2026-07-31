import { z } from "zod";

export const FlyPassengerPolicySchema = z.object({
  infantAllowed: z.boolean(),

  childAllowed: z.boolean(),

  petsAllowed: z.boolean(),

  unaccompaniedMinor: z.boolean(),

  wheelchairSupport: z.boolean(),

  pregnantPassengerAllowed: z.boolean(),
});

export type FlyPassengerPolicyFormValues = z.infer<
  typeof FlyPassengerPolicySchema
>;
