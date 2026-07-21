import { z } from "zod";

export const AirportTransferPassengerRequirementSchema = z.object({
  passportRequired: z.boolean().optional(),

  phoneRequired: z.boolean().default(true),

  emailRequired: z.boolean().default(true),

  minimumPassenger: z.number().optional(),

  maximumPassenger: z.number().optional(),
});
