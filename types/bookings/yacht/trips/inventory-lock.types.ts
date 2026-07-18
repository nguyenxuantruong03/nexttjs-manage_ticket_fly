import { InventoryLockStatus } from "@/types/common/enums";



export interface YachtInventoryLock {
  id: string;

  availabilityId?: string | null;

  tripId: string;

  yachtId: string;

  userId?: string | null;

  bookingId?: string | null;

  startTime: Date;

  releasedAt?: Date | null;

  status: InventoryLockStatus;

  endTime: Date;

  quantity: number;

  expiresAt: Date;

  createdAt: Date;
}
