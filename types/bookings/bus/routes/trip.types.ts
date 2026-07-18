import { BusBooking } from "../booking/booking.types";
import { BusBoardingStatus, BusTripStatus } from "../enums";
import { BusTripPrice } from "../pricing/trip-price.types";
import { BusReview } from "../reviews/review.types";
import { BusSeatInventoryLock } from "./inventory-lock.types";
import { BusRoute } from "./route.types";
import { BusSeatAvailability } from "./seat-availability.types";
import { BusRouteStop } from "./stop.types";

export interface BusTrip {
  id: string;

  routeId: string;
  route?: BusRoute;

  bookings?: BusBooking[];

  seatAvailability?: BusSeatAvailability[];

  stops?: BusRouteStop[];

  locks?: BusSeatInventoryLock[];

  departureTime: Date;

  arrivalTime: Date;

  status: BusTripStatus;

  boardingStatus: BusBoardingStatus;

  price?: BusTripPrice | null;

  review?: BusReview[];

  createdAt: Date;

  updatedAt: Date;
}
