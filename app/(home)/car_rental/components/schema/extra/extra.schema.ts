import { z } from "zod";

import { CarRentalExtraPriceSchema } from "./extra-price.schema";
import { CarRentalExtraType } from "@/types/bookings/car_rental/enums";

export const CarRentalExtraSchema = z.object({
  rentalId: z.string(),

  type: z.nativeEnum(CarRentalExtraType),

  name: z.string().min(1),

  description: z.string().optional(),

  image: z.string().optional(),

  required: z.boolean().default(false),

  available: z.boolean().default(true),

  prices: z.array(CarRentalExtraPriceSchema).default([]),
});
