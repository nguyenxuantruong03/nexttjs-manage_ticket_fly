import { z } from "zod";

export const BusSeatPriceSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  seatTypeId: z.string(),

  // ======================================================
  // PRICE
  // ======================================================

  price: z.number(),

  originalPrice: z.number().nullable(),

  taxes: z.number(),

  serviceFee: z.number(),

  bookingFee: z.number(),

  discount: z.number(),

  finalPrice: z.number(),

  availableSeats: z.number().nullable(),
});

export type BusSeatPriceFormValues = z.infer<typeof BusSeatPriceSchema>;
