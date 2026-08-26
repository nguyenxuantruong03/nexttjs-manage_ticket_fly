import { z } from "zod";

export const FlyAirlineSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  legalName: z.string().trim().optional(),

  iataCode: z.string().trim().optional(),

  icaoCode: z.string().trim().optional(),

  callsign: z.string().trim().optional(),

  country: z.string().trim().optional(),

  website: z.string().trim().optional(),

  hotline: z.string().trim().optional(),

  email: z.string().trim().optional(),

  logo: z.string().trim().optional(),

  banner: z.string().trim().optional(),

  description: z.string().trim().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type FlyAirlineFormSchema = z.infer<typeof FlyAirlineSchema>;
