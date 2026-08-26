import { InventoryLockStatus } from "@/types/common/enums";
import { User } from "@/types/users/auth/users";
import { HotelRatePlan } from "../pricing/rate-plan.types";
import { HotelInventory } from "./inventory.types";
import { InventoryLockReason } from "../enum/enums";
import { HotelBooking } from "../bookings/booking";

export interface HotelInventoryLock {
  id: string;

  inventoryId: string;
  inventory: HotelInventory;

  ratePlanId: string | null;
  ratePlan: HotelRatePlan | null;

  userId: string | null;
  user: User | null;

  bookingId: string | null;
  booking: HotelBooking | null;

  quantity: number | null;
  status: InventoryLockStatus;

  reason: InventoryLockReason;

  startTime: Date | null;
  releasedAt: Date | null;
  endTime: Date | null;
  expiresAt: Date | null;

  createdAt: Date;
}