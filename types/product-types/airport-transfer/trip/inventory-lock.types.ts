import { InventoryLockStatus } from "@/types/common/enums";

import { AirportTransferAvailability } from "./availability.types";
import { AirportTransferTrip } from "./trip.types";
import { AirportTransferBooking } from "../booking/booking.types";
import { User } from "@/types/users/auth/users";
import { AirportTransferVehicle } from "../vehicle/vehicle.types";

export interface AirportTransferInventoryLock {
  // =====================================================
  // BASIC
  // =====================================================

  id: string;

  // =====================================================
  // AVAILABILITY
  // =====================================================

  availabilityId: string;
  availability: AirportTransferAvailability;

  // =====================================================
  // TRIP
  // =====================================================

  tripId: string | null;
  trip: AirportTransferTrip | null;

  // =====================================================
  // VEHICLE
  // =====================================================

  vehicleId: string | null;
  vehicle: AirportTransferVehicle | null;

  // =====================================================
  // BOOKING
  // =====================================================

  bookingId: string | null;
  booking: AirportTransferBooking | null;

  // =====================================================
  // USER
  // =====================================================

  userId: string;

  user: User;

  // =====================================================
  // LOCK INFORMATION
  // =====================================================

  startTime: string;

  releasedAt: string | null;

  status: InventoryLockStatus;

  endTime: string;

  quantity: number;

  expiresAt: string;

  // =====================================================
  // TIMESTAMPS
  // =====================================================

  createdAt: string;
}
