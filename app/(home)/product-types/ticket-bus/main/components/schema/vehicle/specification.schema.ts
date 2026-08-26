import { z } from "zod";

export const BusVehicleSpecificationSchema = z.object({
  // ======================================================
  // SPECIFICATION
  // ======================================================

  engineType: z.string().nullable(),

  transmission: z.string().nullable(),

  fuelTypeId: z.string().nullable(),

  suspension: z.string().nullable(),

  airConditioning: z.boolean().nullable(),

  wifiAvailable: z.boolean().nullable(),

  toiletAvailable: z.boolean().nullable(),
});

export type BusVehicleSpecificationFormValues = z.infer<
  typeof BusVehicleSpecificationSchema
>;