import { z } from "zod";

export const FlyAirportSchema = z.object({
  name: z.string().min(1),

  code: z.string().min(1),

  iataCode: z.string().min(1),

  icaoCode: z.string().optional(),

  terminalCount: z.number().optional(),

  lat: z.number().optional(),

  lng: z.number().optional(),

  addressId: z.string().optional(),
});

export type FlyAirportFormValues = z.infer<typeof FlyAirportSchema>;