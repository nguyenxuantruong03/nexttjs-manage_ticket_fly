import { InventoryLockStatus } from "@/types/common/enums";
import { User } from "@/types/bookings/auth/users";
import { FlyBooking } from "../booking/booking.types";
import { FlyInventoryFare } from "./inventory.types";

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
