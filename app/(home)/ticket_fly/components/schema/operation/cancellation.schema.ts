import { z } from "zod";

export const FlyCancellationSchema = z.object({
  reason: z.string().optional(),

  cancelledAt: z.date(),

  compensationRequired: z.boolean().optional(),
});

export type FlyCancellationFormValues = z.infer<typeof FlyCancellationSchema>;
