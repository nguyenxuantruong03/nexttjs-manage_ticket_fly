import { RentalVehicleImageCategory, RentalVehicleImagePosition } from "@/types/bookings/car_rental/enums";
import { z } from "zod";


export const CarRentalVehicleImageSchema = z.object({
  vehicleId: z.string(),

  url: z.string().url(),

  category: z.nativeEnum(RentalVehicleImageCategory),

  position: z.nativeEnum(RentalVehicleImagePosition).nullable().optional(),

  alt: z.string().nullable().optional(),

  isPrimary: z.boolean().default(false),

  sortOrder: z.number().default(0),
});
