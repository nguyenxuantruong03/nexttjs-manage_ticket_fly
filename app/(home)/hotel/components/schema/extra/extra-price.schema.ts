import { ExtraPriceUnit } from "@/types/bookings/hotel/enum/enums";
import { z } from "zod";


export const ExtraPriceUnitSchema = z.nativeEnum(ExtraPriceUnit);

export const HotelExtraPriceSchema = z.object({
  id: z.string().cuid(),

  extraId: z.string().cuid(),

  price: z.number().min(0),

  unit: ExtraPriceUnitSchema,

  active: z.boolean().default(true),

  createdAt: z.coerce.date(),
});

export type HotelExtraPriceInput = z.infer<typeof HotelExtraPriceSchema>;
