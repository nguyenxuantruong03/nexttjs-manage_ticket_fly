import { RentalDurationType } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalPriceBreakdownSchema = z.object({
  priceId: z.string(),

  rentalRate: z.number(),

  duration: z.number(),

  durationType: z.nativeEnum(RentalDurationType),

  taxes: z.number().default(0),

  serviceFee: z.number().default(0),

  insuranceFee: z.number().default(0),

  deliveryFee: z.number().default(0),

  extraDriverFee: z.number().default(0),

  childSeatFee: z.number().default(0),

  gpsFee: z.number().default(0),

  helmetFee: z.number().default(0),

  discount: z.number().default(0),

  includedItems: z.array(z.string()).default([]),
});
