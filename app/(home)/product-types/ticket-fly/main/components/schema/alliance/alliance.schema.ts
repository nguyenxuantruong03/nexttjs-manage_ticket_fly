import { z } from "zod";

// ======================================================
// ALLIANCE MEMBER
// ======================================================

export const FlyAllianceMemberSchema = z.object({
  airlineId: z.string(),

  joinedAt: z.date().optional(),
});

export type FlyAllianceMemberFormValues = z.infer<
  typeof FlyAllianceMemberSchema
>;

// ======================================================
// ALLIANCE
// ======================================================

export const FlyAllianceSchema = z.object({
  name: z.string().min(1),

  code: z.string().min(1),

  logo: z.string().optional(),

  description: z.string().optional(),

  airlines: z.array(FlyAllianceMemberSchema).optional(),
});

export type FlyAllianceFormValues = z.infer<typeof FlyAllianceSchema>;
