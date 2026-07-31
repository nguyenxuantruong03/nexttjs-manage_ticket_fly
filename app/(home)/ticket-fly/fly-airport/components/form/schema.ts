import { z } from "zod";

export const FlyAirportSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),

  code: z.string().trim().min(1, "Code is required"),

  iataCode: z.string().trim().min(1, "IATA code is required"),

  icaoCode: z.string().trim().optional(),

  terminalCount: z.coerce.number().optional(),
  lat: z.coerce.number().optional(),
  lng: z.coerce.number().optional(),

  addressId: z.string().trim().optional(),
});

export type FlyAirportFormSchema = z.infer<typeof FlyAirportSchema>;
