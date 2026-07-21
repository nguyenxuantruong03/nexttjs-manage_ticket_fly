import { z } from "zod";

export const CarRentalRulesSchema = z.object({
  policiesId: z.string(),

  minimumAge: z.number().optional(),

  maximumAge: z.number().optional(),

  requiresDriverLicense: z.boolean().optional(),

  requiresInternationalLicense: z.boolean().optional(),

  minimumDrivingExperienceYears: z.number().optional(),

  smokingAllowed: z.boolean().optional(),

  petsAllowed: z.boolean().optional(),

  offRoadAllowed: z.boolean().optional(),

  crossBorderAllowed: z.boolean().optional(),

  additionalDriverAllowed: z.boolean().optional(),

  lateReturnFeePerHour: z.number().optional(),
});
