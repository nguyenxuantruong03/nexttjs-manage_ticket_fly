import { z } from "zod";

// ======================================================
// HOTEL FACILITY MAPPER - MANAGE
// ======================================================

export const hotelFacilityMapperSchema = z.object({
  facilityId: z.string(),
});

export type HotelFacilityMapperInput = z.infer<
  typeof hotelFacilityMapperSchema
>;
