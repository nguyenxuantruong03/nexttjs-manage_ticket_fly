import { User } from "@/types/users/auth/users";
import { InventoryLockStatus } from "@/types/common/enums";

import { Yacht } from "../core/yacht.types";
import { YachtAvailability } from "./availability.types";
import { YachtBooking } from "../booking/booking.types";
import { YachtTrip } from "./trip.types";

export interface YachtInventoryLock {
  id: string;

  availabilityId: string | null;
  availability: YachtAvailability | null;

  tripId: string;
  trip: YachtTrip;

  yachtId: string;
  yacht: Yacht;

  userId: string | null;
  user: User | null;

  bookingId: string | null;
  booking: YachtBooking | null;

  startTime: Date;
  releasedAt: Date | null;
  status: InventoryLockStatus;
  endTime: Date;
  quantity: number;
  expiresAt: Date;

  createdAt: Date;
}