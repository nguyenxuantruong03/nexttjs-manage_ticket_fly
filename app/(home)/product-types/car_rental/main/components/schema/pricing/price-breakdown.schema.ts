import { RentalDurationType } from "@/types/product-types/car_rental/enums";
import { z } from "zod";


export const CarRentalPriceBreakdownSchema = z.object({
  // ======================================================
  // RENTAL
  // ======================================================

  rentalRate: z.number(),

  duration: z.number(),

  durationType: z.nativeEnum(RentalDurationType),

  // ======================================================
  // REQUIRED FEES
  // ======================================================

  taxes: z.number().default(0),

  serviceFee: z.number().default(0),

  // ======================================================
  // INSURANCE
  // ======================================================

  insuranceFee: z.number().default(0),

  // ======================================================
  // ADDITIONAL SERVICES
  // ======================================================

  deliveryFee: z.number().default(0),

  extraDriverFee: z.number().default(0),

  childSeatFee: z.number().default(0),

  gpsFee: z.number().default(0),

  helmetFee: z.number().default(0),

  // ======================================================
  // DISCOUNT
  // ======================================================

  discount: z.number().default(0),

  // ======================================================
  // INCLUDED ITEMS
  // ======================================================

  includedItems: z.array(z.string()).default([]),
});

export type CarRentalPriceBreakdownFormSchema = z.infer<
  typeof CarRentalPriceBreakdownSchema
>;