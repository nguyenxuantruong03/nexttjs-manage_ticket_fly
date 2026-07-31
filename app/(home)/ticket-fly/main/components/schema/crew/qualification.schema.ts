import { z } from "zod";

export const FlyCrewQualificationSchema = z.object({
  aircraftType: z.string(),

  validUntil: z.date().optional(),

  issuedAt: z.date().optional(),
});

export type FlyCrewQualificationFormValues = z.infer<
  typeof FlyCrewQualificationSchema
>;