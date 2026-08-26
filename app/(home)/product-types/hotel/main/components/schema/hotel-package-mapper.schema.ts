import { z } from "zod";

// ======================================================
// HOTEL PACKAGE MAPPER - MANAGE
// ======================================================

export const hotelPackageMapperSchema = z.object({
  packageId: z.string(),
});

export type HotelPackageMapperInput = z.infer<typeof hotelPackageMapperSchema>;
