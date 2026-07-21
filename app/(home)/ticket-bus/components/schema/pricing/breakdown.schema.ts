import { BusSeatType } from "@/types/bookings/bus/enums";
import { z } from "zod";

export const BusPriceBreakdownSchema = z.object({
  seatType: z.nativeEnum(BusSeatType),

  basePrice: z.number(),

  originalPrice: z.number().optional(),

  taxes: z.number(),

  serviceFee: z.number(),

  bookingFee: z.number(),

  discount: z.number(),

  finalPrice: z.number(),

  availableSeats: z.number().optional(),

  includedItems: z.array(z.string()),
});

export type BusPriceBreakdownFormValues = z.infer<
  typeof BusPriceBreakdownSchema
>;
