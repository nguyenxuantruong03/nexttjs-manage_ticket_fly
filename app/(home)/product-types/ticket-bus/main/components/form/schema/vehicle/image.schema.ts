import { z } from "zod";

export const BusVehicleImageSchema = z.object({
  mediaId: z.string(),

  categoryId: z.string().nullable(),

  // ======================================================
  // IMAGE
  // ======================================================

  isPrimary: z.boolean(),

  sortOrder: z.number(),

  alt: z.string().nullable(),
});

export type BusVehicleImageFormValues = z.infer<typeof BusVehicleImageSchema>;
