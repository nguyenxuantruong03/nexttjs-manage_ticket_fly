import { z } from "zod";


import { CarRentalVehicleSchema } from "./vehicle.schema";

export const CarRentalVehicleFacilityMapperSchema = z.object({
  facilityId: z.string(),

  quantity: z.number().nullable(),

  note: z.string().nullable(),

});

export type CarRentalVehicleFacilityMapperSchemaType = z.infer<
  typeof CarRentalVehicleFacilityMapperSchema
>;
