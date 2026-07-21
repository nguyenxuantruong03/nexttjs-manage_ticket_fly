import { z } from "zod";

export const AirportTransferMeetAndGreetSchema = z.object({
  available: z.boolean().default(false),

  included: z.boolean().default(false),

  additionalFee: z.number().optional(),

  nameBoard: z.boolean().default(false),

  airportRepresentative: z.boolean().optional(),

  multilingualSupport: z.boolean().optional(),
});
