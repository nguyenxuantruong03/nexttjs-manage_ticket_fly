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
  officialName: z.string().optional(),

  displayName: z.string().min(1, "Display name is required"),

  shortName: z.string().optional(),

  subtitle: z.string().optional(),

  description: z.string().optional(),

  logo: z.string().url().optional().or(z.literal("")),

  banner: z.string().url().optional().or(z.literal("")),

  // ======================
  // COMPANY
  // ======================

  companyType: z.string().optional(),

  registrationNumber: z.string().optional(),

  taxCode: z.string().optional(),

  licenseNumber: z.string().optional(),

  foundedYear: z.coerce.number().optional(),

  employeeCount: z.coerce.number().optional(),

  // ======================
  // CONTACT
  // ======================

  email: z.string().email().optional().or(z.literal("")),

  phone: z.string().optional(),

  hotline: z.string().optional(),

  website: z.string().url().optional().or(z.literal("")),

  // ======================
  // ADDRESS
  // ======================

  address: z.string().optional(),

  city: z.string().optional(),

  state: z.string().optional(),

  country: z.string().optional(),

  postalCode: z.string().optional(),

  latitude: z.coerce.number().optional(),

  longitude: z.coerce.number().optional(),

  // ======================
  // SOCIAL
  // ======================

  facebook: z.string().url().optional().or(z.literal("")),

  instagram: z.string().url().optional().or(z.literal("")),

  youtube: z.string().url().optional().or(z.literal("")),

  linkedin: z.string().url().optional().or(z.literal("")),

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

export type FormValues = z.infer<typeof schema>;