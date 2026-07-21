import { z } from "zod";

import { InventoryLockStatus } from "@/types/common/enums";

export const InventoryLockStatusSchema = z.nativeEnum(InventoryLockStatus);

export const HotelInventoryLockSchema = z.object({
  id: z.string().cuid(),

  inventoryId: z.string().cuid(),

  ratePlanId: z.string().cuid().nullable().optional(),

  userId: z.string().cuid().nullable().optional(),

  bookingId: z.string().cuid().nullable().optional(),

  quantity: z.number().int().min(1),

  status: InventoryLockStatusSchema,

  startTime: z.coerce.date(),

  releasedAt: z.coerce.date().nullable().optional(),

  endTime: z.coerce.date(),

  expiresAt: z.coerce.date(),

  createdAt: z.coerce.date(),
});

export type HotelInventoryLockInput = z.infer<typeof HotelInventoryLockSchema>;
