import { InventoryLockStatus } from "@/types/common/enums";

export interface AirportTransferInventoryLock {
  id: string;

  availabilityId: string;

  tripId?: string;

  vehicleId?: string;

  bookingId?: string;

  userId: string;

  startTime: string;

  releasedAt?: string;

  status: InventoryLockStatus;

  endTime: string;

  quantity: number;

  expiresAt: string;

  createdAt: string;
}