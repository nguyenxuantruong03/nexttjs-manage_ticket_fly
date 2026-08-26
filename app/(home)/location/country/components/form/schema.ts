import { z } from "zod";

export const CountrySchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Country name is required"),
  currencyId: z.string().trim(),
  officialName: z.string().trim().nullable().optional(),

  code: z.string().trim().min(1, "Country code is required"),

  iso2: z.string().trim().length(2, "ISO2 must be 2 characters"),

  iso3: z.string().trim().length(3, "ISO3 must be 3 characters"),
  phoneCode: z.string().trim().nullable().optional(),

  capital: z.string().trim().nullable().optional(),

  // ======================================================
  // LOCATION
  // ======================================================

  continentId: z.string().trim().min(1, "Continent is required"),

  timezoneId: z.string().trim().nullable().optional(),

  // ======================================================
  // MEDIA
  // ======================================================

  flag: z.string().trim().nullable().optional(),
  thumbnail: z.string().trim().optional(),
  coverImage: z.string().trim().optional(),
  bannerImage: z.string().trim().optional(),
  images: z.array(z.string().trim()).default([]),
  video: z.string().trim().optional(),

  // ======================================================
  // SEARCH
  // ======================================================

  tagIds: z.array(z.string()).default([]),
  languageIds: z.array(z.string()).default([]),
  searchPriority: z.coerce.number().int().default(0),

  featured: z.boolean().default(false),

  searchable: z.boolean().default(true),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),
});

export type CountryFormSchema = z.infer<typeof CountrySchema>;
