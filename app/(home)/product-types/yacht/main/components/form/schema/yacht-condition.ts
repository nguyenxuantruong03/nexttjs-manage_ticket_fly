// schema/yacht-condition.schema.ts

import { z } from "zod";

export const YachtConditionSchema = z.object({
  name: z.string().min(1),

  description: z.string().nullable().optional(),

  sortOrder: z.number(),

  active: z.boolean(),
});

export type YachtConditionFormValues = z.infer<typeof YachtConditionSchema>;
