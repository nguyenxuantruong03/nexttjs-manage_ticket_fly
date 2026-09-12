import { z } from "zod";

export const YachtCrewSchema = z.object({
  name: z.string().min(1),

  roleId: z.string(),

  avatar: z.string().nullable().optional(),

  experienceYears: z.number().int().min(0).nullable().optional(),

  languages: z.array(z.string()),
  active: z.boolean().default(true),
});

export type YachtCrewFormValues = z.infer<typeof YachtCrewSchema>;
