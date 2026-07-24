import { Continent } from "@/types/bookings/location/city";
import { z } from "zod";

export const CountrySchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Country name is required"),

  officialName: z.string().trim().optional(),

  slug: z.string().trim().min(1, "Slug is required"),

  code: z.string().trim().min(1, "Country code is required"),

  iso2: z.string().trim().length(2, "ISO2 must be 2 characters"),

  iso3: z.string().trim().length(3, "ISO3 must be 3 characters"),

  phoneCode: z.string().trim().optional(),

  capital: z.string().trim().optional(),

  // ======================================================
  // LOCATION
  // ======================================================

  continent: z.nativeEnum(Continent, {
    message: "Continent is required",
  }),

  timezone: z.string().trim().optional(),

  languages: z.array(z.string().trim()).default([]),

  // ======================================================
  // MEDIA
  // ======================================================

  flag: z.string().trim().optional(),

  thumbnail: z.string().trim().optional(),

  coverImage: z.string().trim().optional(),

  // ======================================================
  // SEARCH
  // ======================================================

  aliases: z.array(z.string().trim()).default([]),

  keywords: z.array(z.string().trim()).default([]),

  priority: z.coerce.number().int().default(0),

  featured: z.boolean().default(false),

  searchable: z.boolean().default(true),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),
});

export type CountryFormSchema = z.infer<typeof CountrySchema>;
