import { z } from "zod";

export const FlyFareTaxSchema = z.object({
  name: z.string().min(1),

  amount: z.number(),
});

export type FlyFareTaxFormValues = z.infer<typeof FlyFareTaxSchema>;
