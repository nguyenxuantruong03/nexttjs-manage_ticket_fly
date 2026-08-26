import { z } from "zod";

export const AirportTransferPackageMapperSchema = z.object({
  packageId: z.string().min(1),
});

export type AirportTransferPackageMapperSchemaType = z.infer<
  typeof AirportTransferPackageMapperSchema
>;