import { z } from "zod";

import { InventoryLockStatus } from "@/types/common/enums";

export const BusSeatInventoryLockSchema = z.object({
  vehicleId: z.string(),

  userId: z.string().nullable().optional(),

  tripId: z.string(),

  startTime: z.date(),

  releasedAt: z.date().nullable().optional(),

  status: z.nativeEnum(InventoryLockStatus),

  endTime: z.date(),

  quantity: z.number(),

  expiresAt: z.date(),
});

export type BusSeatInventoryLockFormValues = z.infer<
  typeof BusSeatInventoryLockSchema
>;