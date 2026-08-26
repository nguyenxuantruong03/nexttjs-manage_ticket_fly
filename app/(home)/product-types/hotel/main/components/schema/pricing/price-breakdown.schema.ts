import { z } from "zod";

// ======================================================
// HOTEL ROOM PRICE BREAKDOWN - MANAGE
// ======================================================

export const hotelRoomPriceBreakdownSchema = z.object({
  // ====================================================
  // PRICE
  // ====================================================

  priceId: z.string().cuid(),

  // ====================================================
  // ROOM RATE
  // ====================================================

  roomRate: z.number().min(0),

  nights: z.number().int().min(1),

  // ====================================================
  // FEES
  // ====================================================

  taxes: z.number().min(0).default(0),

  serviceFee: z.number().min(0).default(0),

  resortFee: z.number().min(0).default(0),

  cleaningFee: z.number().min(0).default(0),

  // ====================================================
  // DISCOUNT
  // ====================================================

  discount: z.number().min(0).default(0),

  // ====================================================
  // INCLUDED ITEMS
  // ====================================================

  includedItems: z.array(z.string()).default([]),
});

export type HotelRoomPriceBreakdownInput = z.infer<
  typeof hotelRoomPriceBreakdownSchema
>;
