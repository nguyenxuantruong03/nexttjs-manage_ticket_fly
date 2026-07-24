import { z } from "zod";
import {
  ProviderOperatingStatus,
  ProviderStatus,
  typeServiceBooking,
} from "@/types/bookings/provider-bookings";

export const schema = z.object({
  // ======================
  // BASIC
  // ======================
  officialName: z.string().nullable().optional(),

  displayName: z.string().min(1, "Display name is required"),

  shortName: z.string().nullable().optional(),

  subtitle: z.string().nullable().optional(),

  description: z.string().nullable().optional(),

  logo: z.string().url().nullable().optional().or(z.literal("")),

  banner: z.string().url().nullable().optional().or(z.literal("")),

  // ======================
  // COMPANY
  // ======================

  companyType: z.string().nullable().optional(),

  registrationNumber: z.string().nullable().optional(),

  taxCode: z.string().nullable().optional(),

  licenseNumber: z.string().nullable().optional(),

  foundedYear: z.coerce.number().nullable().optional(),

  employeeCount: z.coerce.number().nullable().optional(),

  // ======================
  // CONTACT
  // ======================

  email: z.string().email().nullable().optional().or(z.literal("")),

  phone: z.string().nullable().optional(),

  hotline: z.string().nullable().optional(),

  website: z.string().url().nullable().optional().or(z.literal("")),

  // ======================
  // ADDRESS
  // ======================

  address: z.string().optional(),

  city: z.string().nullable().optional(),

  state: z.string().nullable().optional(),

  country: z.string().nullable().optional(),

  postalCode: z.string().nullable().optional(),

  latitude: z.coerce.number().nullable().optional(),

  longitude: z.coerce.number().nullable().optional(),

  // ======================
  // SOCIAL
  // ======================

  facebook: z.string().url().nullable().optional().or(z.literal("")),

  instagram: z.string().url().nullable().optional().or(z.literal("")),

  youtube: z.string().url().nullable().optional().or(z.literal("")),

  linkedin: z.string().url().nullable().optional().or(z.literal("")),

  // ======================
  // STATUS
  // ======================

  verified: z.boolean(),

  status: z.nativeEnum(ProviderStatus),

  operatingStatus: z.nativeEnum(ProviderOperatingStatus),

  // ======================
  // OWNER
  // ======================

  userId: z.string().min(1),

  // ======================
  // SERVICE
  // ======================

  service: z.array(z.nativeEnum(typeServiceBooking)).default([]),
});

export type ProviderBookingFormSchema = z.infer<typeof schema>;
