import { AirportTransferBookingStatus } from "../enums";
import { PaymentStatus } from "@/types/common/user/payment";
import { User } from "@/types/users/auth/users";

import { AirportTransfer } from "../core/airport-transfer.types";
import { AirportTransferTrip } from "../trip/trip.types";
import { AirportTransferVehicle } from "../vehicle/vehicle.types";
import { AirportTransferInventoryLock } from "../trip/inventory-lock.types";
import { AirportTransferPackageMapper } from "../airportTransfer-package-mapper.type";
import { AirportTransferReview } from "../review/review.types";

import { AirportTransferBookingPassenger } from "./booking-passenger.types";
import { AirportTransferBookingContact } from "./booking-contact.types";
import { AirportTransferBookingFlight } from "./booking-flight.types";
import { AirportTransferBookingExtra } from "./booking-extra.types";
import { AirportTransferBookingTimeline } from "./booking-timeline.types";
import { AirportTransferBookingStatusHistory } from "./booking-history.types";

export interface AirportTransferBooking {
  id: string;

  transferId: string;

  transfer: AirportTransfer;

  tripId: string | null;

  trip: AirportTransferTrip | null;

  vehicleId: string | null;

  vehicle: AirportTransferVehicle | null;

  userId: string;

  user: User;

  packageId: string | null;

  package: AirportTransferPackageMapper | null;

  status: AirportTransferBookingStatus;

  pickupTime: string;

  totalAmount: number;

  paymentStatus: PaymentStatus;

  passengers: AirportTransferBookingPassenger[];

  contact: AirportTransferBookingContact | null;

  flight: AirportTransferBookingFlight | null;

  extras: AirportTransferBookingExtra[];

  timeline: AirportTransferBookingTimeline[];

  histories: AirportTransferBookingStatusHistory[];

  locks: AirportTransferInventoryLock[];

  reviews: AirportTransferReview[];

  createdAt: string;

  updatedAt: string;
}