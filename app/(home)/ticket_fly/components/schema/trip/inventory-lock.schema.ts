import { z } from "zod";

import { InventoryLockStatus } from "@/types/common/enums";

export const FlyInventoryLockSchema = z.object({
  userId: z.string().optional(),

  startTime: z.coerce.date(),

  releasedAt: z.coerce.date().optional(),

  status: z.nativeEnum(InventoryLockStatus),

  endTime: z.coerce.date(),

  quantity: z.number(),

  expiresAt: z.coerce.date(),
});

export type FlyInventoryLockFormValues = z.infer<typeof FlyInventoryLockSchema>;
