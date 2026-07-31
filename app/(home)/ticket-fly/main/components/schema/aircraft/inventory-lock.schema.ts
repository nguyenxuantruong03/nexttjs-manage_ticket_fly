import { z } from "zod";

import { InventoryLockStatus } from "@/types/common/enums";

export const FlySeatInventoryLockSchema = z.object({
  tripId: z.string(),

  seatId: z.string(),

  userId: z.string().optional(),

  bookingId: z.string().optional(),

  startTime: z.coerce.date(),

  releasedAt: z.coerce.date().optional(),

  status: z.nativeEnum(InventoryLockStatus),

  endTime: z.coerce.date(),

  quantity: z.number(),

  expiresAt: z.coerce.date(),
});

export type FlySeatInventoryLockFormValues = z.infer<
  typeof FlySeatInventoryLockSchema
>;
