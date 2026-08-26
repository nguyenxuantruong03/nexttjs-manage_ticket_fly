import { z } from "zod";

export const CarRentalTripFeeSchema = z.object({
  // ======================================================
  // TRIP
  // ======================================================

  tripId: z.string().min(1),

  // ======================================================
  // FEES
  // ======================================================

  airportFee: z.number().optional(),

  oneWayFee: z.number().optional(),

  deliveryFee: z.number().optional(),

  pickupFee: z.number().optional(),

  dropoffFee: z.number().optional(),
});

export type CarRentalTripFeeFormSchema = z.infer<
  typeof CarRentalTripFeeSchema
>;