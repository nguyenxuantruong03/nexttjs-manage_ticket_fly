import { z } from "zod";

import { HotelRoomFacilitiesSchema } from "./room-facilities.schema";

import { HotelRoomImageSchema } from "./room-image.schema";
import {
  BathroomType,
  BedType,
  MealPlan,
  RoomViewType,
  SmokingPolicy,
} from "@/types/bookings/hotel/enum/enums";

export const BedTypeSchema = z.nativeEnum(BedType);

export const RoomViewTypeSchema = z.nativeEnum(RoomViewType);

export const BathroomTypeSchema = z.nativeEnum(BathroomType);

export const SmokingPolicySchema = z.nativeEnum(SmokingPolicy);

export const MealPlanSchema = z.nativeEnum(MealPlan);

export const HotelRoomSchema = z.object({
  id: z.string().cuid(),

  roomTypeId: z.string().cuid(),

  roomFacilities: HotelRoomFacilitiesSchema.nullable().optional(),

  active: z.boolean().default(true),

  name: z.string().min(1),

  description: z.string().nullable().optional(),

  roomSize: z.number().positive().nullable().optional(),

  bedTypes: z.array(BedTypeSchema).default([]),

  maxGuests: z.number().int().nullable().optional(),

  maxAdults: z.number().int().nullable().optional(),

  maxChildren: z.number().int().nullable().optional(),

  totalRooms: z.number().int().nullable().optional(),

  breakfastIncluded: z.boolean().nullable().optional(),

  smokingPolicy: SmokingPolicySchema.nullable().optional(),

  mealPlan: MealPlanSchema.nullable().optional(),

  bedCount: z.number().int().nullable().optional(),

  bathroomCount: z.number().int().nullable().optional(),

  viewType: RoomViewTypeSchema.nullable().optional(),

  bathRoomType: BathroomTypeSchema.nullable().optional(),

  roomImage: z.array(HotelRoomImageSchema).default([]),

  floor: z.number().int().nullable().optional(),

  soundproof: z.boolean().nullable().optional(),

  nonSmoking: z.boolean().nullable().optional(),

  airConditioning: z.boolean().nullable().optional(),

  kitchenette: z.boolean().nullable().optional(),

  privateBathroom: z.boolean().nullable().optional(),
});

export type HotelRoomInput = z.infer<typeof HotelRoomSchema>;
