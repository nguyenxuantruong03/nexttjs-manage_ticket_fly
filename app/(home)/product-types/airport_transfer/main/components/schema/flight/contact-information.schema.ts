import { z } from "zod";

export const AirportTransferContactInformationSchema = z.object({
  hotline: z.string().optional(),

  whatsapp: z.string().optional(),

  telegram: z.string().optional(),

  emergencyPhone: z.string().optional(),

  supportEmail: z.string().email().optional(),
});
