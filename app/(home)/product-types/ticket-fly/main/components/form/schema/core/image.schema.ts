import { z } from "zod";


export const FlyImageSchema = z.object({
  id: z.string(),

  flyId: z.string(),

  mediaId: z.string(),

  categoryId: z.string().nullable(),

  isPrimary: z.boolean(),

  sortOrder: z.number(),

  createdAt: z.string(),

  updatedAt: z.string(),
});

export type FlyImageFormValues = z.infer<typeof FlyImageSchema>;
