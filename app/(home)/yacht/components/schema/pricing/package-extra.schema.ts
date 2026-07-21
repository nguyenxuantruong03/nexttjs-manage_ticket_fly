// schema/pricing/package-extra.schema.ts

import { z } from "zod";

export const YachtPackageExtraSchema = z.object({
  packageId: z.string(),

  extraId: z.string(),
});

export type YachtPackageExtraFormValues = z.infer<
  typeof YachtPackageExtraSchema
>;