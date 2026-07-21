import { RetaurentCategory } from "@/types/bookings/hotel/enum/enums";
import { z } from "zod";

export const RestaurantCategorySchema = z.nativeEnum(RetaurentCategory);

export const HotelRestaurantImageSchema = z.object({
  id: z.string().cuid(),

  restaurantId: z.string().cuid(),

  url: z.string().url(),

  category: RestaurantCategorySchema,

  isPrimary: z.boolean().default(false),

  sortOrder: z.number().default(0),

  createdAt: z.coerce.date(),
});

export const HotelRestaurantSchema = z.object({
  id: z.string().cuid(),

  facilitiesId: z.string().cuid(),

  name: z.string().min(1),

  cuisineTypes: z.array(z.string()).default([]),

  breakfast: z.boolean().nullable().optional(),

  lunch: z.boolean().nullable().optional(),

  dinner: z.boolean().nullable().optional(),

  buffet: z.boolean().nullable().optional(),

  reservation: z.boolean().nullable().optional(),

  capacity: z.number().nullable().optional(),

  opening: z.string().nullable().optional(),

  images: z.array(HotelRestaurantImageSchema),

  price: z.number(),
});
