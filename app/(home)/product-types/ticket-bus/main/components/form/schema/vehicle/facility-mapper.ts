import { z } from "zod";

export const BusVehicleFacilityMapperSchema = z.object({
  facilityId: z.string(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type BusVehicleFacilityMapperFormValues = z.infer<
  typeof BusVehicleFacilityMapperSchema
>;
