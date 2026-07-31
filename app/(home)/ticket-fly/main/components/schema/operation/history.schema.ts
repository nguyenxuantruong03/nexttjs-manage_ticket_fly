import { z } from "zod";

import { FlyOperationStatus } from "@/types/bookings/ticket-fly/enums";

export const FlyTripHistorySchema = z.object({
  oldStatus: z.nativeEnum(FlyOperationStatus),

  newStatus: z.nativeEnum(FlyOperationStatus),

  changedAt: z.date(),
});

export type FlyTripHistoryFormValues = z.infer<typeof FlyTripHistorySchema>;
