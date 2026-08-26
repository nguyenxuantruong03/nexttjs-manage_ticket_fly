import { z } from "zod";

export const YachtImageSchema = z.object({
  mediaId: z.string(),

  categoryId: z.string().nullable().optional(),

  isPrimary: z.boolean(),

  sortOrder: z.number().int().min(0),
});

export type YachtImageFormValues = z.infer<typeof YachtImageSchema>;
