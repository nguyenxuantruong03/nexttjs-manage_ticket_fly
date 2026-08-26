import { z } from "zod";

export const FlyPackageMapperSchema = z.object({
  packageId: z.string(),
});

export type FlyPackageMapperFormValues = z.infer<typeof FlyPackageMapperSchema>;
