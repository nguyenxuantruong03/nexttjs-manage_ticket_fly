import { FlySeatSchema } from "@/app/(home)/product-types/references/airline/aircraft/main/components/schema/cabin.schema";
import { z } from "zod";

// ======================================================
// SEAT TYPE
// ======================================================

export const FlySeatTypeSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  description: z.string().optional(),

  icon: z.string().optional(),

  sortOrder: z.number().int().min(0),

  active: z.boolean(),

  // ======================================================
  // SEATS
  // ======================================================

  seats: z.array(FlySeatSchema).optional(),
});

export type FlySeatTypeFormValues = z.infer<typeof FlySeatTypeSchema>;
