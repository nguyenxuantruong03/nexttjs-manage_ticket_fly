import { InventoryLockStatus } from "@/types/common/enums";

export interface HotelInventoryLock {
  id: string;

  inventoryId: string;

  ratePlanId?: string | null;

  userId?: string | null;

  bookingId?: string | null;

  quantity: number;

  status: InventoryLockStatus;

  startTime: Date;

  releasedAt?: Date | null;

  endTime: Date;

  expiresAt: Date;

  createdAt: Date;
}
