import { z } from "zod";

export const YachtPackageMapperSchema = z.object({
  packageId: z.string(),
});

export type YachtPackageMapperFormValues = z.infer<
  typeof YachtPackageMapperSchema
>;