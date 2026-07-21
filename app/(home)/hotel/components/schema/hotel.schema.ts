import { z } from "zod";

import { HotelImageSchema } from "./hotel-image.schema";

import { HotelInformationSchema } from "./hotel-information.schema";

import { HotelFacilitiesSchema } from "./facilities/facilities.schema";
import { HotelStatus } from "@/types/bookings/hotel/enum/enums";

export const HotelStatusSchema = z.nativeEnum(HotelStatus);

export const HotelSchema = z.object({
  id: z.string().cuid(),

  information: HotelInformationSchema.nullable().optional(),

  hotelImage: z.array(HotelImageSchema).default([]),

  inventory: z.array(z.any()).default([]),

  roomTypes: z.array(z.any()).default([]),

  reviews: z.array(z.any()).default([]),

  facilitiesHotel: HotelFacilitiesSchema.nullable().optional(),

  bookings: z.array(z.any()).default([]),

  extras: z.array(z.any()).default([]),

  mealOptions: z.array(z.any()).default([]),

  favorites: z.array(z.any()).default([]),

  nearbyPlaces: z.array(z.any()).default([]),

  areaGuides: z.array(z.any()).default([]),

  status: HotelStatusSchema.default(HotelStatus.DRAFT),

  name: z.string().min(2),

  slug: z.string().min(2),
  active: z.boolean().default(true),
  aliases: z.array(z.string()).default([]),

  keywords: z.array(z.string()).default([]),

  tags: z.array(z.string()).default([]),

  searchText: z.string().nullable().optional(),

  featured: z.boolean().default(false),

  searchable: z.boolean().default(true),

  searchPriority: z.number().int().default(0),

  createdAt: z.coerce.date(),

  updatedAt: z.coerce.date(),
});

export type HotelFormValues = z.infer<typeof HotelSchema>;
