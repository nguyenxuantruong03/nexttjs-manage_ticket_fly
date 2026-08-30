import { z } from "zod";
import { AirportTransferDriverLanguageMapperSchema } from "../driver-language-mapper.schema";


export const AirportTransferDriverSchema = z.object({
  // =====================================================
  // VEHICLE
  // =====================================================

  vehicleId: z.string().min(1),

  // =====================================================
  // BASIC INFORMATION
  // =====================================================

  firstName: z.string().min(1),

  lastName: z.string().min(1),

  avatar: z.string().nullable(),

  phone: z.string().nullable(),

  email: z.string().email().nullable(),

  // =====================================================
  // LICENSE
  // =====================================================

  licenseNumber: z.string().nullable(),

  licenseExpiry: z.string().nullable(),

  // =====================================================
  // EXPERIENCE
  // =====================================================

  experienceYears: z.coerce.number().min(0).nullable(),

  // =====================================================
  // LANGUAGES
  // =====================================================

  languages: z.array(AirportTransferDriverLanguageMapperSchema),

  // =====================================================
  // STATUS
  // =====================================================

  active: z.boolean().default(true),
});

export type AirportTransferDriverFormSchema = z.infer<
  typeof AirportTransferDriverSchema
>;
