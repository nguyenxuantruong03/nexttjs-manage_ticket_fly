import { BusLuggageUnit } from "@/types/bookings/bus/enums";
import { z } from "zod";

export const BusLuggagePolicySchema = z.object({

  includedLuggage: z.number().optional(),

  unit: z.nativeEnum(BusLuggageUnit),

  extraLuggageAllowed: z.boolean(),

  extraLuggageFee: z.number().optional(),
});

export type BusLuggagePolicyFormValues = z.infer<typeof BusLuggagePolicySchema>;
