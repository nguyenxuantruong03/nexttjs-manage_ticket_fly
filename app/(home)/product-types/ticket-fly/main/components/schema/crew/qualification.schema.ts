import { z } from "zod";

export const FlyCrewQualificationSchema = z.object({
  crewId: z.string(),

  aircraftType: z.string().min(1),

  validUntil: z.date().optional(),

  issuedAt: z.date().optional(),
});

export type FlyCrewQualificationFormValues = z.infer<
  typeof FlyCrewQualificationSchema
>;
