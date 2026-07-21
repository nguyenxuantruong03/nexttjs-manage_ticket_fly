// ======================================================
// Bus Image
// ======================================================

import { BusImageCategory } from "@/types/bookings/bus/enums";
import { z } from "zod";

export const BusImageSchema = z.object({
  url: z.string(),
  category: z.nativeEnum(BusImageCategory),
  alt: z.string().optional(),
  isPrimary: z.boolean(),
  sortOrder: z.number(),
});

export type BusImageFormValues = z.infer<typeof BusImageSchema>;
