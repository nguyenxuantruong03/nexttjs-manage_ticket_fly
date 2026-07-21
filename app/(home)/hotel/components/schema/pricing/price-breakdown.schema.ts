import { z } from "zod";

export const HotelRoomPriceBreakdownSchema = z.object({
  id: z.string().cuid(),

  priceId: z.string().cuid(),

  roomRate: z.number().min(0),

  nights: z.number().int().min(1),

  taxes: z.number().min(0).default(0),

  serviceFee: z.number().min(0).default(0),

  resortFee: z.number().min(0).default(0),

  cleaningFee: z.number().min(0).default(0),

  extraFee: z.number().min(0).default(0),

  discount: z.number().default(0),

  includedItems: z.array(z.string()).default([]),
});

export type HotelRoomPriceBreakdownInput = z.infer<
  typeof HotelRoomPriceBreakdownSchema
>;
