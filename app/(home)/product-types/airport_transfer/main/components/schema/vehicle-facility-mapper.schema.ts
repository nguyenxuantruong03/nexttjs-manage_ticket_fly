import { z } from "zod";

export const AirportTransferVehicleFacilityMapperSchema = z.object({
  // =====================================================
  // FACILITY
  // =====================================================

  facilityId: z.string().min(1),

  // =====================================================
  // STATUS
  // =====================================================

  active: z.boolean().default(true),
});

export type AirportTransferVehicleFacilityMapperSchemaType = z.infer<
  typeof AirportTransferVehicleFacilityMapperSchema
>;
