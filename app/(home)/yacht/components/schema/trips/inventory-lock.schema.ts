// schema/trips/inventory-lock.schema.ts

import { z } from "zod";

import { InventoryLockStatus } from "@/types/common/enums";

export const YachtInventoryLockSchema = z.object({
  availabilityId: z.string().nullable().optional(),

  tripId: z.string(),


  userId: z.string().nullable().optional(),

  startTime: z.date(),

  releasedAt: z.date().nullable().optional(),

  status: z.nativeEnum(InventoryLockStatus),

  endTime: z.date(),

  quantity: z.number(),

  expiresAt: z.date(),
});

export type YachtInventoryLockFormValues = z.infer<
  typeof YachtInventoryLockSchema
>;
