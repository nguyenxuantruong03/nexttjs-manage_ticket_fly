import { InventoryLockStatus } from "@/types/common/enums";
import { FlyBooking } from "../booking/booking.types";
import { FlyInventoryFare } from "./inventory.types";
import { User } from "@/types/users/auth/users";

export interface FlyInventoryLock {
  id: string;

  inventoryFareId: string;
  inventoryFare?: FlyInventoryFare;

  bookingId?: string;
  booking?: FlyBooking;

  userId?: string;
  user?: User;

  startTime: Date;
  releasedAt?: Date;
  status: InventoryLockStatus;
  endTime: Date;
  quantity: number;
  expiresAt: Date;

  createdAt: Date;
}
