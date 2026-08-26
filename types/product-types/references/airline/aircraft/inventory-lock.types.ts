import { InventoryLockStatus } from "@/types/common/enums";
import { FlySeat } from "./cabin.types";
import { User } from "@/types/users/auth/users";
import { FlyTrip } from "@/types/product-types/ticket-fly/trip/trip.types";
import { FlyBooking } from "@/types/product-types/ticket-fly/booking/booking.types";

export interface FlySeatInventoryLock {
  id: string;

  tripId: string;
  trip?: FlyTrip;

  seatId: string;
  seat?: FlySeat;

  userId?: string;
  user?: User;

  bookingId?: string;
  booking?: FlyBooking;

  startTime: Date;

  releasedAt?: Date;

  status: InventoryLockStatus;

  endTime: Date;

  quantity: number;

  expiresAt: Date;

  createdAt: Date;
}
