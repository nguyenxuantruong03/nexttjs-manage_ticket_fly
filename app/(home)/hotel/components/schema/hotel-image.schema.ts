import { HotelImageCategory } from "@/types/bookings/hotel/enum/enums";
import { z } from "zod";

export const HotelImageCategorySchema = z.nativeEnum(HotelImageCategory);

export const HotelImageSchema = z.object({
  id: z.string().cuid(),

  hotelId: z.string().cuid(),

  url: z.string().url(),

  category: HotelImageCategorySchema,

  sortOrder: z.number().int().min(0).default(0),

  isPrimary: z.boolean().default(false),

  createdAt: z.coerce.date(),
});

export type HotelImageInput = z.infer<typeof HotelImageSchema>;
