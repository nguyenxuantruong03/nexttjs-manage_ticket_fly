import { z } from "zod";

export const BusSeatTypeSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string(),

  description: z.string().nullable(),

  icon: z.string().nullable(),

  // ======================================================
  // STATUS
  // ======================================================

  sortOrder: z.number(),

  active: z.boolean(),
});

export type BusSeatTypeFormValues = z.infer<typeof BusSeatTypeSchema>;
