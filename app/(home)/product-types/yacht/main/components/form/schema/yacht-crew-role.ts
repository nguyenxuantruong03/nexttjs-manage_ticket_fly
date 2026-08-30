// schema/crew/crew-role.schema.ts

import { z } from "zod";

export const YachtCrewRoleSchema = z.object({
  name: z.string().min(1),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  sortOrder: z.number(),

  active: z.boolean(),
});

export type YachtCrewRoleFormValues = z.infer<typeof YachtCrewRoleSchema>;
