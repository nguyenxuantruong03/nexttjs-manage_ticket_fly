import { z } from "zod";

export const StarRatingSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  star: z.coerce
    .number()
    .int()
    .min(1, "Star rating must be at least 1")
    .max(7, "Star rating cannot exceed 7"),

  description: z.string().trim().nullable().optional(),
});

export type StarRatingFormSchema = z.infer<typeof StarRatingSchema>;
