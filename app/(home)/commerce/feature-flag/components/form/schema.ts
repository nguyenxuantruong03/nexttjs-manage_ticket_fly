import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  key: z.string().trim().min(1, "Feature flag key is required"),

  description: z.string().trim().nullable().optional(),

  // ======================================================
  // ROLLOUT
  // ======================================================

  rolloutPercent: z
    .number()
    .int()
    .min(0, "Rollout percent must be greater than or equal to 0")
    .max(100, "Rollout percent cannot exceed 100"),

  targetRegions: z.array(z.string()).default([]),

  // ======================================================
  // STATUS
  // ======================================================

  isEnabled: z.boolean(),
});

export type FeatureFlagFormSchema = z.infer<typeof schema>;
