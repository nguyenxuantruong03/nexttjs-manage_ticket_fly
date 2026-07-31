import { z } from "zod";

export const FlyVisaPolicySchema = z.object({
  visaRequired: z.boolean().optional(),

  passportRequired: z.boolean().optional(),

  passportMinimumValidityMonths: z.number().optional(),

  healthDocumentsRequired: z.boolean().optional(),

  note: z.string().optional(),
});

export type FlyVisaPolicyFormValues = z.infer<typeof FlyVisaPolicySchema>;
