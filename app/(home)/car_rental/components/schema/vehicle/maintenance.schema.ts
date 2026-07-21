import { z } from "zod";

export const CarRentalVehicleMaintenanceSchema = z.object({
  vehicleId: z.string(),

  type: z.string().optional(),

  description: z.string().optional(),

  mileageKm: z.number().optional(),

  serviceDate: z.string().optional(),

  cost: z.number().optional(),
});
