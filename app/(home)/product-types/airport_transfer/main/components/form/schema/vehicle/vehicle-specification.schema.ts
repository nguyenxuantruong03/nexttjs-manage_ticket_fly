import { z } from "zod";

export const AirportTransferVehicleSpecificationSchema = z.object({
  // =====================================================
  // ENGINE
  // =====================================================

  engineSizeCc: z.number().nullable(),

  // =====================================================
  // FUEL
  // =====================================================

  fuelCapacity: z.number().nullable(),

  // =====================================================
  // VEHICLE
  // =====================================================

  mileageKm: z.number().nullable(),

  vin: z.string().nullable(),
});

export type AirportTransferVehicleSpecificationFormSchema = z.infer<
  typeof AirportTransferVehicleSpecificationSchema
>;