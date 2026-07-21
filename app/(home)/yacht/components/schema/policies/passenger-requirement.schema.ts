// schema/policies/passenger-requirement.schema.ts

import { z } from "zod";

export const YachtPassengerRequirementSchema = z.object({

  minimumAge: z.number().nullable().optional(),

  passportRequired: z.boolean(),

  identityRequired: z.boolean(),

  nationalityRestriction: z.array(z.string()).default([]),

  childAllowed: z.boolean(),

  infantAllowed: z.boolean(),

  pregnantPassengerAllowed: z.boolean().nullable().optional(),
});

export type YachtPassengerRequirementFormValues = z.infer<
  typeof YachtPassengerRequirementSchema
>;
