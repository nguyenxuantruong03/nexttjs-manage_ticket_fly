import { z } from "zod";

import { FlyDelaySchema } from "./operation/delay.schema";

// ======================================================
// DELAY REASON
// ======================================================

export const FlyDelayReasonSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  description: z.string().optional(),

  icon: z.string().optional(),

  sortOrder: z.number().int().min(0),

  active: z.boolean(),

  // ======================================================
  // DELAYS
  // ======================================================

  delays: z.array(FlyDelaySchema).optional(),
});

export type FlyDelayReasonFormValues = z.infer<
  typeof FlyDelayReasonSchema
>;