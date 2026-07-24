import { RentalVehicleDocumentType } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalVehicleDocumentSchema = z.object({
  vehicleId: z.string(),

  type: z.nativeEnum(RentalVehicleDocumentType),

  url: z.string().url(),

  expiryDate: z.date().nullable().optional(),
});
