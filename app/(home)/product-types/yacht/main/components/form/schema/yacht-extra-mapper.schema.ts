import { z } from "zod";

export const YachtExtraMapperSchema = z.object({
  extraId: z.string(),

  active: z.boolean(),

  sortOrder: z.number(),
});

export type YachtExtraMapperFormValues = z.infer<typeof YachtExtraMapperSchema>;
