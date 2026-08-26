import { z } from "zod";

import {
  hotelAccessibilitySchema,
  hotelAwardSchema,
  hotelContactSchema,
  hotelDescriptionSchema,
  hotelOpeningHourSchema,
  hotelSustainabilitySchema,
} from "../hotel-detail.schema";
import { hotelDiningOptionSchema } from "../service/dinner-option.schema";
import { hotelInformationSchema } from "./hotel-information.schema";
import { hotelRoomTypeSchema } from "../room/room-type.schema";
import { hotelInventorySchema } from "../inventory/inventory.schema";
import { HotelStatus } from "@/types/product-types/hotel/enum/enums";
import { hotelFacilityMapperSchema } from "../facility-mapper";
import { hotelPolicyMapperSchema } from "../policy-mapper";
import { hotelPackageMapperSchema } from "../hotel-package-mapper.schema";
import { hotelExtraMapperSchema } from "../hotel-extra-mapper.schema";
import { hotelMediaSchema } from "./hotel-media.types";
import { hotelCheckInPolicySchema } from "../check-in-policy";

export const HotelStatusSchema = z.nativeEnum(HotelStatus);

// ======================================================
// HOTEL CREATE / MANAGE
// ======================================================

export const HotelSchema = z.object({
  // ======================================================
  // SERVICE / BOOKING TYPE
  // ======================================================

  serviceTypeId: z.string(),

  bookingItemTypeId: z.string(),

  inventories: z.array(hotelInventorySchema),
  // ======================================================
  // HOTEL INFORMATION
  // ======================================================

  information: hotelInformationSchema.nullable().optional(),

  medias: z.array(hotelMediaSchema),

  // ======================================================
  // ROOMS
  // ======================================================

  roomTypes: z.array(hotelRoomTypeSchema),

  // ======================================================
  // PACKAGE
  // ======================================================

  hotelPackageMapper: z.array(hotelPackageMapperSchema),

  // ======================================================
  // FACILITIES / POLICIES
  // ======================================================

  facilities: z.array(hotelFacilityMapperSchema),

  policies: z.array(hotelPolicyMapperSchema),

  checkinPolicy: hotelCheckInPolicySchema.nullable().optional(),

  accessibilities: z.array(hotelAccessibilitySchema),

  awards: z.array(hotelAwardSchema),

  // ======================================================
  // EXTRAS
  // ======================================================

  hotelExtraMapper: z.array(hotelExtraMapperSchema),

  // ======================================================
  // SERVICES
  // ======================================================

  mealOptions: z.array(hotelDiningOptionSchema),

  openingHours: z.array(hotelOpeningHourSchema),

  descriptions: z.array(hotelDescriptionSchema),

  contacts: hotelContactSchema.nullable().optional(),

  sustainabilities: z.array(hotelSustainabilitySchema),

  // ======================================================
  // BRAND / STAR RATING
  // ======================================================

  brandId: z.string().nullable().optional(),

  starRatingId: z.string().nullable().optional(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  status: HotelStatusSchema,

  // ======================================================
  // SEARCH CONFIGURATION
  // ======================================================

  tagIds: z.array(z.string()).default([]),

  searchable: z.boolean(),

  searchPriority: z.coerce.number().default(0),

  // ======================================================
  // FEATURED
  // ======================================================
  featured: z.boolean(),
});

export type HotelSchemaForm = z.infer<typeof HotelSchema>;
