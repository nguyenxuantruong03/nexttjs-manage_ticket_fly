import { z } from "zod";

import { InventoryLockStatus } from "@/types/common/enums";

export const CarRentalInventoryLockSchema = z.object({
  bookingId: z.string().optional(),

  vehicleId: z.string(),

  userId: z.string().optional(),

  startTime: z.string(),

  endTime: z.string(),

  releasedAt: z.string().optional(),

  status: z.nativeEnum(InventoryLockStatus),

  quantity: z.number().default(1),

  expiresAt: z.string(),
});
