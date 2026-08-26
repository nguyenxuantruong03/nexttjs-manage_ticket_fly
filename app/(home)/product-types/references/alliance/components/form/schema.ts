import { z } from "zod";

export const FlyAllianceSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),

  code: z.string().trim().min(1, "Code is required"),

  logo: z.string().trim().optional(),

  description: z.string().trim().optional(),
});

export type FlyAllianceFormSchema = z.infer<typeof FlyAllianceSchema>;
