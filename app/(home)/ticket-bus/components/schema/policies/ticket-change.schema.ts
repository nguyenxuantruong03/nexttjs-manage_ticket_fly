import { BusTicketChangeType } from "@/types/bookings/bus/enums";
import { z } from "zod";

export const BusTicketChangePolicySchema = z.object({

  type: z.nativeEnum(BusTicketChangeType),

  changeFee: z.number().optional(),

  maxChanges: z.number().optional(),

  changeBeforeDepartureHours: z.number().optional(),
});

export type BusTicketChangePolicyFormValues = z.infer<
  typeof BusTicketChangePolicySchema
>;
