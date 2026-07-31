import { z } from "zod";

export const FlyTransitPolicySchema = z.object({
  selfTransfer: z.boolean(),

  baggageTransfer: z.boolean(),

  visaRequiredDuringTransit: z.boolean(),

  minimumConnectionMinutes: z.number().optional(),
});

export type FlyTransitPolicyFormValues = z.infer<typeof FlyTransitPolicySchema>;
