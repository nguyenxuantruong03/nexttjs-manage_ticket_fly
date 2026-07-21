import { RentalLocationType } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalLocationSchema = z.object({
  tripId: z.string(),

  bookingId: z.string().optional(),

  type: z.nativeEnum(RentalLocationType),

  name: z.string(),

  addressId: z.string(),

  available: z.boolean().default(true),
});
