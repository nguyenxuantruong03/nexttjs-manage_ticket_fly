import { CarRentalImageCategory } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalImageSchema = z.object({
  url: z.string().url(),

  category: z.nativeEnum(CarRentalImageCategory),

  alt: z.string().optional(),

  isPrimary: z.boolean().default(false),

  sortOrder: z.number().default(0),
});
