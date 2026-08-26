import { z } from "zod";

export const FlyDelaySchema = z.object({
  id: z.string(),

  operationId: z.string(),

  minutes: z.number(),

  reasonId: z.string(),

  description: z.string().optional(),

  createdAt: z.date(),
});

export type FlyDelayFormValues = z.infer<typeof FlyDelaySchema>;