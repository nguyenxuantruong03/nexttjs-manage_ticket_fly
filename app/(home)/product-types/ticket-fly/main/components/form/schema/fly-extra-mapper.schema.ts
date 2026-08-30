import { z } from "zod";

export const FlyExtraMapperSchema = z.object({
  extraId: z.string(),

  active: z.boolean(),

  sortOrder: z.number().int().min(0),
});

export type FlyExtraMapperFormValues = z.infer<typeof FlyExtraMapperSchema>;
