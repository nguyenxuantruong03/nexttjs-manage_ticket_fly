import { z } from "zod";

import { BusSeatAvailabilitySchema } from "../routes/seat-availability.schema";
import { BusSeatType } from "@/types/bookings/bus/enums";

export const BusSeatSchema = z.object({
  seatNumber: z.string(),

  type: z.nativeEnum(BusSeatType),

  floor: z.number().optional(),

  row: z.number().optional(),

  column: z.number().optional(),
});

export type BusSeatFormValues = z.infer<typeof BusSeatSchema>;
