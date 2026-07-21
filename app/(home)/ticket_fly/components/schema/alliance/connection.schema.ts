import { z } from "zod";

export const FlyBaggageTransferSchema = z.object({
  automaticTransfer: z.boolean(),

  customsRequired: z.boolean(),

  collectAgain: z.boolean(),
});

export const FlyConnectionSchema = z.object({
  firstTripId: z.string(),

  secondTripId: z.string(),

  layoverMinutes: z.number(),

  airportChange: z.boolean(),

  terminalChange: z.boolean(),

  baggageTransfer: z.array(FlyBaggageTransferSchema).optional(),
});

export type FlyBaggageTransferFormValues = z.infer<
  typeof FlyBaggageTransferSchema
>;

export type FlyConnectionFormValues = z.infer<typeof FlyConnectionSchema>;
