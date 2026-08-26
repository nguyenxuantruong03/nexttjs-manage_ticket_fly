import { FlyOperationStatus } from "@/types/product-types/ticket-fly/enums";
import { z } from "zod";


export const FlyTripHistorySchema = z.object({
  oldStatus: z.nativeEnum(FlyOperationStatus),

  newStatus: z.nativeEnum(FlyOperationStatus),

  changedAt: z.date(),
});

export type FlyTripHistoryFormValues = z.infer<typeof FlyTripHistorySchema>;
