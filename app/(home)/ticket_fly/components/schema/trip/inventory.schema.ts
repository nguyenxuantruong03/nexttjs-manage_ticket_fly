import { z } from "zod";

import { FlyCabinClass } from "@/types/bookings/ticket-fly/enums";

import { FlyInventoryLockSchema } from "./inventory-lock.schema";
import { FlyWaitlistSchema } from "./waitlist.schema";

export const FlyInventoryFareSchema = z.object({
  fareId: z.string(),

  locks: z.array(FlyInventoryLockSchema).optional(),

  waitlists: z.array(FlyWaitlistSchema).optional(),

  available: z.number(),

  sold: z.number(),

  hold: z.number(),

  waitlist: z.number(),
});

export const FlyCabinInventorySchema = z.object({
  cabinClass: z.nativeEnum(FlyCabinClass),

  totalSeats: z.number(),

  availableSeats: z.number(),

  reservedSeats: z.number(),

  blockedSeats: z.number(),

  overbookLimit: z.number().optional(),

  waitlistSeats: z.number().optional(),

  fares: z.array(FlyInventoryFareSchema).optional(),
});

export const FlyInventorySchema = z.object({
  cabins: z.array(FlyCabinInventorySchema).optional(),
});

export type FlyInventoryFareFormValues = z.infer<
  typeof FlyInventoryFareSchema
>;

export type FlyCabinInventoryFormValues = z.infer<
  typeof FlyCabinInventorySchema
>;

export type FlyInventoryFormValues = z.infer<
  typeof FlyInventorySchema
>;