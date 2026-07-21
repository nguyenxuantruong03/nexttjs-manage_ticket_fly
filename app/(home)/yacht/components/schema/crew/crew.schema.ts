// schema/crew/crew.schema.ts

import { z } from "zod";
import { YachtCrewRole } from "@/types/bookings/yacht/enums";

export const YachtCrewSchema = z.object({
  name: z.string().min(1),

  role: z.nativeEnum(YachtCrewRole),

  avatar: z.string().nullable().optional(),

  experienceYears: z.number().nullable().optional(),

  languages: z.array(z.string()).default([]),
});

export type YachtCrewFormValues = z.infer<typeof YachtCrewSchema>;
