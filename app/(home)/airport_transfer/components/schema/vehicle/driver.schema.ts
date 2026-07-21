import { AirportTransferDriverLanguage } from "@/types/bookings/airport-transfer/enums";
import { z } from "zod";

export const AirportTransferDriverSchema = z.object({
  firstName: z.string(),

  lastName: z.string(),

  avatar: z.string().optional(),

  phone: z.string().optional(),

  email: z.string().email().optional(),

  licenseNumber: z.string().optional(),

  licenseExpiry: z.string().optional(),

  experienceYears: z.number().optional(),

  rating: z.number().optional(),

  totalTrips: z.number().default(0),

  languages: z.array(z.nativeEnum(AirportTransferDriverLanguage)),

  active: z.boolean().default(true),
});
