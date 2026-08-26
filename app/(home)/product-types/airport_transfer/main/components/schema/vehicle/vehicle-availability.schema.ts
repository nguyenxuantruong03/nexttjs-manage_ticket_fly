import { z } from "zod";

export const AirportTransferVehicleAvailabilitySchema = z.object({
  // =====================================================
  // AVAILABILITY PERIOD
  // =====================================================

  startDate: z.string(),

  endDate: z.string(),

  // =====================================================
  // STATUS
  // =====================================================

  available: z.boolean().default(true),

  // =====================================================
  // NOTE
  // =====================================================

  note: z.string().nullable(),
});

export type AirportTransferVehicleAvailabilityFormSchema = z.infer<
  typeof AirportTransferVehicleAvailabilitySchema
>;
