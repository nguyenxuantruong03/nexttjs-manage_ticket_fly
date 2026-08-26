import { z } from "zod";

export const FlyInterlineSchema = z.object({
  validatingAirlineId: z.string(),

  baggageTransfer: z.boolean(),

  protectedConnection: z.boolean(),
});

export type FlyInterlineFormValues = z.infer<
  typeof FlyInterlineSchema
>;