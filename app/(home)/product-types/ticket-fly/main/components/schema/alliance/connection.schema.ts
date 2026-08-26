import { z } from "zod";

// ======================================================
// BAGGAGE TRANSFER
// ======================================================

export const FlyBaggageTransferSchema = z.object({
  automaticTransfer: z.boolean(),

  customsRequired: z.boolean(),

  collectAgain: z.boolean(),
});

export type FlyBaggageTransferFormValues = z.infer<
  typeof FlyBaggageTransferSchema
>;

// ======================================================
// CONNECTION
// ======================================================

export const FlyConnectionSchema = z.object({
  // ======================================================
  // TRIPS
  // ======================================================

  firstTripId: z.string(),

  secondTripId: z.string(),

  // ======================================================
  // CONNECTION
  // ======================================================

  layoverMinutes: z.number(),

  airportChange: z.boolean(),

  terminalChange: z.boolean(),

  // ======================================================
  // BAGGAGE
  // ======================================================

  baggageTransfer: z.array(FlyBaggageTransferSchema).optional(),
});

export type FlyConnectionFormValues = z.infer<typeof FlyConnectionSchema>;
