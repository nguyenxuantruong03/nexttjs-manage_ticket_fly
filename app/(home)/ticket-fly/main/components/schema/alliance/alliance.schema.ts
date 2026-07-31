import { z } from "zod";

export const FlyAllianceMemberSchema = z.object({
  airlineId: z.string(),

  joinedAt: z.date().optional(),
});

export const FlyAllianceSchema = z.object({
  name: z.string().min(1),

  code: z.string().min(1),

  logo: z.string().optional(),

  description: z.string().optional(),

  airlines: z.array(FlyAllianceMemberSchema).optional(),
});

export type FlyAllianceMemberFormValues = z.infer<
  typeof FlyAllianceMemberSchema
>;

export type FlyAllianceFormValues = z.infer<typeof FlyAllianceSchema>;
