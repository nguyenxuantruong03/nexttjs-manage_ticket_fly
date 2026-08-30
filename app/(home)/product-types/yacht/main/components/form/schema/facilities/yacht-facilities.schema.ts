import { z } from "zod";

export const YachtMarinaFacilityMapperSchema = z.object({
  facilityId: z.string(),

  active: z.boolean(),
});

export type YachtMarinaFacilityMapperFormValues = z.infer<
  typeof YachtMarinaFacilityMapperSchema
>;

export const YachtVehicleFacilityMapperSchema = z.object({
  facilityId: z.string(),

  active: z.boolean(),
});

export type YachtVehicleFacilityMapperFormValues = z.infer<
  typeof YachtVehicleFacilityMapperSchema
>;
