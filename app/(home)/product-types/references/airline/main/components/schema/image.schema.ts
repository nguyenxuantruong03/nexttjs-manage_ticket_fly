import { z } from "zod";

export const FlyAirlineImageSchema = z.object({
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

export type FlyAirlineImageFormValues = z.infer<typeof FlyAirlineImageSchema>;
