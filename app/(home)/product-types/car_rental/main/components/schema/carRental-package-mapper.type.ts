import { z } from "zod";

export const CarRentalPackageMapperSchema = z.object({
  packageId: z.string(),

});

export type CarRentalPackageMapperSchemaType = z.infer<
  typeof CarRentalPackageMapperSchema
>;
