import { z } from "zod";
// ======================================================
// CREW ROLE
// ======================================================

export const FlyCrewRoleSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  description: z.string().optional(),

  icon: z.string().optional(),

  sortOrder: z.number().int().min(0),

  active: z.boolean(),
});

export type FlyCrewRoleFormSchema = z.infer<typeof FlyCrewRoleSchema>;
