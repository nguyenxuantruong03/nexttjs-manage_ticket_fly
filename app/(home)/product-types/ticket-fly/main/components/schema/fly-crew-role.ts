import { z } from "zod";
import { FlyCrewSchema } from "./crew/crew.schema";


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

  // ======================================================
  // CREWS
  // ======================================================

  crews: z.array(FlyCrewSchema).optional(),
});

export type FlyCrewRoleFormValues = z.infer<
  typeof FlyCrewRoleSchema
>;