// schema/pricing/package-image.schema.ts

import { z } from "zod";

export const YachtPackageImageSchema = z.object({

  url: z.string().min(1),

  sortOrder: z.number(),
});

export type YachtPackageImageFormValues = z.infer<
  typeof YachtPackageImageSchema
>;
