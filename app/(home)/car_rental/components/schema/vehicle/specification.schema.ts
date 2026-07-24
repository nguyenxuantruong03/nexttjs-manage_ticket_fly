import { RentalVehicleCondition } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalVehicleSpecificationSchema = z.object({
  vehicleId: z.string(),

  vin: z.string().nullable().optional(),

  engineSizeCc: z.number().nullable().optional(),

  horsePower: z.number().nullable().optional(),

  batteryCapacityKwh: z.number().nullable().optional(),

  rangeKm: z.number().nullable().optional(),

  condition: z.nativeEnum(RentalVehicleCondition).nullable().optional(),

  previousOwners: z.number().nullable().optional(),
});
