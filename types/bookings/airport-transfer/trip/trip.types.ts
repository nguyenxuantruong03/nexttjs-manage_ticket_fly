import { AirportTransferBooking } from "../booking/booking.types";
import { AirportTransferTripStatus } from "../enums";
import { AirportTransferTripPrice } from "../pricing/trip-price.types";
import { AirportTransferVehicleAssignment } from "./assignment.types";
import { AirportTransferInventoryLock } from "./inventory-lock.types";

export interface AirportTransferTrip {
  id: string;

  transferId: string;

  routeId: string;

  scheduleId?: string;

  bookings: AirportTransferBooking[];

  departureTime: string;

  estimatedArrivalTime: string;

  totalSeats: number;

  availableSeats: number;

  price?: AirportTransferTripPrice;

  status: AirportTransferTripStatus;

  locks: AirportTransferInventoryLock[];

  vehicleAssignment: AirportTransferVehicleAssignment[];

  createdAt: string;

  updatedAt: string;
}
