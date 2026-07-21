import { AirportTransferExtraFeeType } from "@/types/bookings/airport-transfer/enums";
import { z } from "zod";

export const AirportTransferExtraFeeSchema = z.object({
  type: z.nativeEnum(AirportTransferExtraFeeType),

  name: z.string().min(1),

  amount: z.number(),

  required: z.boolean().default(false),
});