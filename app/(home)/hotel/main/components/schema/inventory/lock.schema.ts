import { z } from "zod";

import { hotelInventorySchema } from "./inventory.schema";
import { InventoryLockReason } from "@/types/bookings/hotel/enum/enums";
import { InventoryLockStatus } from "@/types/common/enums";

// ======================================================
// HOTEL INVENTORY LOCK
// ======================================================

export const hotelInventoryLockSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  inventoryId: z.string().min(1, "Inventory is required"),

  ratePlanId: z.string().nullable().optional(),

  userId: z.string().nullable().optional(),

  bookingId: z.string().nullable().optional(),

  // ======================================================
  // BASIC
  // ======================================================

  quantity: z.number().int().min(1).default(1),

  status: z.nativeEnum(InventoryLockStatus).default(InventoryLockStatus.LOCKED),

  reason: z.nativeEnum(InventoryLockReason),

  startTime: z.date({
    required_error: "Start time is required",
  }),

  releasedAt: z.date().nullable().optional(),

  endTime: z
    .date({
      required_error: "End time is required",
    })
    .optional(),

  expiresAt: z
    .date({
      required_error: "Expires at is required",
    })
    .optional(),
});

// ======================================================
// TYPES
// ======================================================

export type HotelInventoryLockFormSchema = z.infer<
  typeof hotelInventoryLockSchema
>;
