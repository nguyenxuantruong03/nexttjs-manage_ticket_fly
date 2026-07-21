import { z } from "zod";
import { AirportTransferExtraFeeSchema } from "./extra-fee.schema";

export const AirportTransferPriceBreakdownSchema = z.object({
  baseFare: z.number(),

  airportFee: z.number().default(0),

  parkingFee: z.number().default(0),

  tollFee: z.number().default(0),

  serviceFee: z.number().default(0),

  taxes: z.number().default(0),

  discount: z.number().default(0),

  totalPrice: z.number(),

  includedItems: z.array(z.string()),

  extraFees: z.array(AirportTransferExtraFeeSchema),
});
