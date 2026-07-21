import { z } from "zod";

import { HotelWifiSchema } from "./wifi.schema";

import { HotelPoolSchema } from "./pool.schema";

import { HotelGymSchema } from "./gym.schema";

import { HotelRestaurantSchema } from "./restaurant.schema";

export const HotelFacilitiesSchema = z.object({
  id: z.string().cuid(),

  hotelId: z.string().cuid(),

  wifi: HotelWifiSchema.nullable().optional(),

  parking: z.any().nullable().optional(),

  swimmingPool: HotelPoolSchema.nullable().optional(),

  gym: HotelGymSchema.nullable().optional(),

  spa: z.any().nullable().optional(),

  restaurants: z.array(HotelRestaurantSchema).default([]),

  bar: z.boolean().nullable().optional(),

  roomService: z.boolean().nullable().optional(),

  laundry: z.boolean().nullable().optional(),

  meetingRoom: z.boolean().nullable().optional(),

  businessCenter: z.boolean().nullable().optional(),

  familyRoom: z.boolean().nullable().optional(),

  kidsClub: z.boolean().nullable().optional(),

  playground: z.boolean().nullable().optional(),

  atm: z.boolean().nullable().optional(),

  currencyExchange: z.boolean().nullable().optional(),

  concierge: z.boolean().nullable().optional(),

  beachAccess: z.boolean().nullable().optional(),

  privateBeach: z.boolean().nullable().optional(),
});
