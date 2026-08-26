import { z } from "zod";

export const AirportTransferVehicleCapacitySchema = z.object({
  // =====================================================
  // PASSENGER
  // =====================================================

  passengerCount: z.number(),

  // =====================================================
  // LUGGAGE
  // =====================================================

  luggageCount: z.number().nullable(),

  cabinBaggageCount: z.number().nullable(),

  oversizedLuggage: z.number().nullable(),
});

export type AirportTransferVehicleCapacityFormSchema = z.infer<
  typeof AirportTransferVehicleCapacitySchema
>;
