import { z } from "zod";

export const FlyOverbookingRuleSchema = z.object({
  id: z.string(),

  airlineId: z.string(),

  cabinClassId: z.string(),

  percentage: z.number(),
});

export type FlyOverbookingRuleFormValues = z.infer<
  typeof FlyOverbookingRuleSchema
>;