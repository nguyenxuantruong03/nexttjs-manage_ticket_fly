import { z } from "zod";

import { InventoryLockStatus } from "@/types/common/enums";

export const AirportTransferInventoryLockSchema = z.object({
  tripId: z.string().optional(),

  vehicleId: z.string().optional(),

  bookingId: z.string().optional(),

  userId: z.string(),

  startTime: z.string(),

  endTime: z.string(),

  quantity: z.number(),

  expiresAt: z.string(),

  status: z.nativeEnum(InventoryLockStatus),
});
