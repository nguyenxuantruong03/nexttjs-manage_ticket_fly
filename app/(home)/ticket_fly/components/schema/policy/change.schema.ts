import { z } from "zod";

export const FlyChangePolicySchema = z.object({
  allowed: z.boolean(),

  changeFee: z.number().optional(),

  maxChanges: z.number().optional(),

  beforeDepartureHours: z.number().optional(),
});

export type FlyChangePolicyFormValues = z.infer<typeof FlyChangePolicySchema>;
