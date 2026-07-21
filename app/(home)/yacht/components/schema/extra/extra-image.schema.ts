// schema/extra/extra-image.schema.ts

import { z } from "zod";

export const YachtExtraImageSchema = z.object({
  extraId: z.string(),

  url: z.string().min(1),

  isPrimary: z.boolean(),

  sortOrder: z.number(),
});

export type YachtExtraImageFormValues = z.infer<
  typeof YachtExtraImageSchema
>;