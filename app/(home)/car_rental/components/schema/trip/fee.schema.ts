import { z } from "zod";

export const CarRentalTripFeeSchema = z.object({
  tripId: z.string(),

  airportFee: z.number().optional(),

  oneWayFee: z.number().optional(),

  deliveryFee: z.number().optional(),

  pickupFee: z.number().optional(),

  dropoffFee: z.number().optional(),
});
