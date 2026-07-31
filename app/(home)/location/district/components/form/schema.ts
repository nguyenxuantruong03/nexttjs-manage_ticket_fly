// schema.ts

import { z } from "zod";

export const DistrictSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  cityId: z.string().trim().min(1, "City is required"),

  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().nullable().optional(),

  name: z.string().trim().min(1, "District name is required"),

  nativeName: z.string().trim().nullable().optional(),

  // ======================================================
  // LOCATION
  // ======================================================

  latitude: z.coerce.number().nullable().optional(),

  longitude: z.coerce.number().nullable().optional(),
});

export type DistrictFormSchema = z.infer<typeof DistrictSchema>;
