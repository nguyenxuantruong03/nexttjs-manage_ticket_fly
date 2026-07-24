import { z } from "zod";

export const CarRentalVehicleMaintenanceSchema = z.object({
  vehicleId: z.string(),

  type: z.string().nullable().optional(),

  description: z.string().nullable().optional(),

  mileageKm: z.number().nullable().optional(),

  serviceDate: z.date().nullable().optional(),

  cost: z.number().nullable().optional(),
});
