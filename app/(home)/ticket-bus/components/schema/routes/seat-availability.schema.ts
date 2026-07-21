import { BusSeatAvailabilityStatus } from "@/types/bookings/bus/enums";
import { z } from "zod";


export const BusSeatAvailabilitySchema = z.object({
  seatId: z.string(),

  status: z.nativeEnum(BusSeatAvailabilityStatus),

  availableSeats: z.number(),

  soldSeats: z.number(),

  reservedSeats: z.number(),

  totalSeats: z.number(),

  currentPrice: z.number(),
});

export type BusSeatAvailabilityFormValues = z.infer<
  typeof BusSeatAvailabilitySchema
>;
