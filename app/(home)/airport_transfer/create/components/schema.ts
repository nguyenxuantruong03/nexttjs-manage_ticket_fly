import { z } from "zod";

export const airportTransferSchema = z.object({
  name: z.string().min(1),

  slug: z.string().min(1),

  providerBookingId: z.string(),

  serviceType: z.string(),

  active: z.boolean(),

  featured: z.boolean(),

  searchable: z.boolean(),

  instantConfirmation: z.boolean(),
});

export type AirportTransferFormValues =
  z.infer<typeof airportTransferSchema>;