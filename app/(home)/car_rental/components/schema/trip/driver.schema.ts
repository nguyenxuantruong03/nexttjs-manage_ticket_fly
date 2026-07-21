import { DriverStatus } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalDriverSchema = z.object({
  rentalId: z.string(),

  name: z.string().min(1),

  phone: z.string().optional(),

  languages: z.array(z.string()).default([]),

  experienceYears: z.number().optional(),

  rating: z.number().default(0),

  status: z.nativeEnum(DriverStatus),

  image: z.string().optional(),
});
