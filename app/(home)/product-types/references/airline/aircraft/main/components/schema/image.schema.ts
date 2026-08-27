import { z } from "zod";

export const FlyAircraftImageSchema = z.object({
  // ======================================================
  // MEDIA
  // ======================================================

  mediaId: z.string(),

  categoryId: z.string().nullable(),

  // ======================================================
  // IMAGE
  // ======================================================

  isPrimary: z.boolean(),

  sortOrder: z.number(),
});

export type FlyAircraftImageFormValues = z.infer<typeof FlyAircraftImageSchema>;
