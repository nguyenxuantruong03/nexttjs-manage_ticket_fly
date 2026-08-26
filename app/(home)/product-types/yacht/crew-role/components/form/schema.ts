import { z } from "zod";

export const YachtCrewRoleSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  description: z.string().trim().nullable().optional(),

  icon: z.string().trim().nullable().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  sortOrder: z.number().int().min(0),

  active: z.boolean(),
});

export type YachtCrewRoleFormSchema = z.infer<typeof YachtCrewRoleSchema>;