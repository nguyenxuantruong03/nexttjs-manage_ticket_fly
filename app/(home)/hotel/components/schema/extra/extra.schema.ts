import { z } from "zod";

import { HotelExtraPriceSchema } from "./extra-price.schema";
import { HotelExtraType } from "@/types/bookings/hotel/enum/enums";

export const HotelExtraTypeSchema = z.nativeEnum(HotelExtraType);

export const HotelExtraSchema = z.object({
  id: z.string().cuid(),

  hotelId: z.string().cuid(),

  name: z.string().min(1),

  description: z.string().nullable().optional(),

  type: HotelExtraTypeSchema,

  required: z.boolean().default(false),

  prices: z.array(HotelExtraPriceSchema).default([]),

  bookingExtras: z.array(z.any()).default([]),

  active: z.boolean().default(true),

  createdAt: z.coerce.date(),

  updatedAt: z.coerce.date(),
});

export type HotelExtraInput = z.infer<typeof HotelExtraSchema>;
