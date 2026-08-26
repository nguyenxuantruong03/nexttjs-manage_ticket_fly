import { z } from "zod";

export const CarRentalVehicleMaintenanceSchema = z.object({
  type: z.string().nullable().optional(),

  description: z.string().nullable().optional(),

  mileageKm: z.number().optional(),

  serviceDate: z.date().nullable().optional(),

  cost: z.number().nullable().optional(),
});

export type CarRentalVehicleMaintenanceSchemaType = z.infer<
  typeof CarRentalVehicleMaintenanceSchema
>;
