// schema.ts

import { z } from "zod";

export const WardSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  districtId: z.string().trim().min(1, "District is required"),

  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().nullable().optional(),

  name: z.string().trim().min(1, "Ward name is required"),

  nativeName: z.string().trim().nullable().optional(),

  // ======================================================
  // LOCATION
  // ======================================================

  latitude: z.coerce.number().nullable().optional(),

  longitude: z.coerce.number().nullable().optional(),
});

export type WardFormSchema = z.infer<typeof WardSchema>;
