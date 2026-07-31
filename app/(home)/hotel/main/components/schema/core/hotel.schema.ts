// ======================================================
// HOTEL SCHEMA
// ======================================================

import { z } from "zod";

import {
  hotelAccessibilitySchema,
  hotelAwardSchema,
  hotelBrandSchema,
  hotelContactSchema,
  hotelDescriptionSchema,
  hotelOpeningHourSchema,
  hotelStarRatingSchema,
  hotelSustainabilitySchema,
} from "../hotel-detail.schema";

import { hotelDiningOptionSchema } from "../service/dinner-option.schema";
import { hotelExtraSchema } from "../service/extra.schema";

import {
  hotelCheckPolicySchema,
  hotelPolicyMapperSchema,
} from "../policy.schema";

import { hotelInformationSchema } from "./hotel-information.schema";

import { hotelRoomTypeSchema } from "../room/room-type.schema";
import { hotelFacilityMapperSchema } from "../facilities.schema";

import { HotelStatus } from "@/types/bookings/hotel/enum/enums";
import { hotelMediaSchema } from "./hotel-media.schema";
import { hotelInventorySchema } from "../inventory/inventory.schema";

export const HotelStatusSchema = z.nativeEnum(HotelStatus);

// ======================================================
// HOTEL
// ======================================================

export const HotelSchema = z.object({
  // ======================================================
  // Relations
  // ======================================================

  information: z
    .lazy(() => hotelInformationSchema)
    .nullable()
    .optional(),

  medias: z.array(z.lazy(() => hotelMediaSchema)).default([]),

  inventories: z.array(z.lazy(() => hotelInventorySchema)).default([]),

  roomTypes: z.array(z.lazy(() => hotelRoomTypeSchema)).default([]),

  facilities: z.array(z.lazy(() => hotelFacilityMapperSchema)).default([]),

  policies: z.array(z.lazy(() => hotelPolicyMapperSchema)).default([]),

  checkinPolicy: z
    .lazy(() => hotelCheckPolicySchema)
    .nullable()
    .optional(),

  accessibilities: z.array(z.lazy(() => hotelAccessibilitySchema)).default([]),

  awards: z.array(z.lazy(() => hotelAwardSchema)).default([]),

  extras: z.array(z.lazy(() => hotelExtraSchema)).default([]),

  mealOptions: z.array(z.lazy(() => hotelDiningOptionSchema)).default([]),

  openingHours: z.array(z.lazy(() => hotelOpeningHourSchema)).default([]),

  descriptions: z.array(z.lazy(() => hotelDescriptionSchema)).default([]),

  contacts: z
    .lazy(() => hotelContactSchema)
    .nullable()
    .optional(),

  sustainabilities: z
    .array(z.lazy(() => hotelSustainabilitySchema))
    .default([]),

  // ======================================================
  // Brand
  // ======================================================

  brandId: z.string().nullable().optional(),

  brand: z
    .lazy(() => hotelBrandSchema)
    .nullable()
    .optional(),

  // ======================================================
  // Star Rating
  // ======================================================

  starRatingId: z.string().nullable().optional(),

  starRating: z
    .lazy(() => hotelStarRatingSchema)
    .nullable()
    .optional(),

  // ======================================================
  // Basic
  // ======================================================

  name: z.string(),

  status: HotelStatusSchema,

  // ======================================================
  // Search
  // ======================================================

  tags: z.array(z.string()).default([]),

  searchable: z.boolean().default(true),

  searchPriority: z.coerce.number().default(0),

  // ======================================================
  // Ranking
  // ======================================================

  featured: z.boolean().default(false),
});

export type HotelSchemaForm = z.infer<typeof HotelSchema>;
