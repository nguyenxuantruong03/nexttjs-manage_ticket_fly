import { z } from "zod";

export const BusPackageMapperSchema = z.object({
  // ======================================================
  // PACKAGE
  // ======================================================

  packageId: z.string(),
});

export type BusPackageMapperFormValues = z.infer<typeof BusPackageMapperSchema>;
