import { z } from "zod";

import { FlyCabinClass, FlySeatType } from "@/types/bookings/ticket-fly/enums";

export const FlySeatSchema = z.object({
  seatNumber: z.string().min(1),

  row: z.number().optional(),

  column: z.string().optional(),

  type: z.nativeEnum(FlySeatType),

  extraLegroom: z.boolean(),

  emergencyExit: z.boolean(),

  nearWindow: z.boolean().optional(),

  nearAisle: z.boolean().optional(),

  nearWing: z.boolean().optional(),

  available: z.boolean(),
});

export const FlyCabinSchema = z.object({
  class: z.nativeEnum(FlyCabinClass),

  name: z.string().optional(),

  rows: z.number().optional(),

  totalSeats: z.number(),

  seats: z.array(FlySeatSchema).optional(),
});

export type FlySeatFormValues = z.infer<typeof FlySeatSchema>;

export type FlyCabinFormValues = z.infer<typeof FlyCabinSchema>;
