import { z } from "zod";

export const AirportTransferLuggagePolicySchema = z.object({
  checkedBaggage: z.number().optional(),

  cabinBaggage: z.number().optional(),

  oversizedAllowed: z.boolean().optional(),

  oversizedFee: z.number().optional(),

  sportsEquipmentAllowed: z.boolean().optional(),

  strollerAllowed: z.boolean().optional(),

  wheelchairAllowed: z.boolean().optional(),
});
