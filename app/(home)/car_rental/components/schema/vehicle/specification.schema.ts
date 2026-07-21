import { RentalVehicleCondition } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalVehicleSpecificationSchema = z.object({
  vehicleId: z.string(),

  vin: z.string().optional(),

  engineSizeCc: z.number().optional(),

  horsePower: z.number().optional(),

  batteryCapacityKwh: z.number().optional(),

  rangeKm: z.number().optional(),

  condition: z.nativeEnum(RentalVehicleCondition).optional(),

  previousOwners: z.number().optional(),
});
