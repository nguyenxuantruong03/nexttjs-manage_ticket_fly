import { z } from "zod";

export const AirportTransferSpecialRequestSchema = z.object({
  childSeat: z.boolean().optional(),

  babySeat: z.boolean().optional(),

  boosterSeat: z.boolean().optional(),

  wheelchair: z.boolean().optional(),

  petTransport: z.boolean().optional(),

  bicycle: z.boolean().optional(),

  skiEquipment: z.boolean().optional(),

  golfBag: z.boolean().optional(),

  additionalStop: z.boolean().optional(),

  noteSupported: z.boolean().default(false),
});
