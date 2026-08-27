import { z } from "zod";

export const FlyAircraftFacilityMapperSchema = z.object({
  // ======================================================
  // FACILITY
  // ======================================================

  facilityId: z.string(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type FlyAircraftFacilityMapperFormValues = z.infer<
  typeof FlyAircraftFacilityMapperSchema
>;
