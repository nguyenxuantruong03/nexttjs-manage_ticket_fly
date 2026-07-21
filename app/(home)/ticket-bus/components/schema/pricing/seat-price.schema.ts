import { BusSeatType } from "@/types/bookings/bus/enums";
import { z } from "zod";

export const BusSeatPriceSchema = z.object({
  seatType: z.nativeEnum(BusSeatType),

  price: z.number(),

  originalPrice: z.number().optional(),

  taxes: z.number(),

  serviceFee: z.number(),

  bookingFee: z.number(),

  discount: z.number(),

  finalPrice: z.number(),

  availableSeats: z.number().optional(),
});

export type BusSeatPriceFormValues = z.infer<typeof BusSeatPriceSchema>;
