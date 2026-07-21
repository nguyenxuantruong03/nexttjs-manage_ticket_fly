import { z } from "zod";

import { FlyCabinClass } from "@/types/bookings/ticket-fly/enums";
import { FlyInventoryFareSchema } from "./inventory.schema";

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

export type FlyCabinInventoryFormValues = z.infer<
  typeof FlyCabinInventorySchema
>;
