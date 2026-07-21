import { z } from "zod";

export const BusChildPolicySchema = z.object({

  freeAgeUnder: z.number().optional(),

  childTicketAgeFrom: z.number().optional(),

  childTicketAgeTo: z.number().optional(),

  childDiscountPercent: z.number().optional(),
});

export type BusChildPolicyFormValues = z.infer<typeof BusChildPolicySchema>;
