import { AirportTransferBooking } from "../booking/booking.types";
import { AirportTransferTripStatus } from "../enums";
import { AirportTransferTripPrice } from "../pricing/trip-price.types";
import { AirportTransferVehicleAssignment } from "./assignment.types";
import { AirportTransferInventoryLock } from "./inventory-lock.types";
import { AirportTransferSchedule } from "../routes/schedule.types";
import { AirportTransferRoute } from "../routes/route.types";

export interface AirportTransferTrip {
  // =====================================================
  // BASIC
  // =====================================================

  id: string;

  // =====================================================
  // ROUTE
  // =====================================================

  routeId: string;
  route: AirportTransferRoute;

  // =====================================================
  // SCHEDULE
  // =====================================================

  scheduleId: string | null;
  schedule: AirportTransferSchedule | null;

  // =====================================================
  // BOOKINGS
  // =====================================================

  bookings: AirportTransferBooking[];

  // =====================================================
  // TRIP INFORMATION
  // =====================================================

  departureTime: string;

  estimatedArrivalTime: string;

  totalSeats: number;

  availableSeats: number;

  // =====================================================
  // PRICING
  // =====================================================

  price: AirportTransferTripPrice | null;

  // =====================================================
  // STATUS
  // =====================================================

  status: AirportTransferTripStatus;

  // =====================================================
  // INVENTORY LOCKS
  // =====================================================

  locks: AirportTransferInventoryLock[];

  // =====================================================
  // VEHICLE ASSIGNMENT
  // =====================================================

  vehicleAssignment: AirportTransferVehicleAssignment[];

  // =====================================================
  // TIMESTAMPS
  // =====================================================

  createdAt: string;

  updatedAt: string;
}
