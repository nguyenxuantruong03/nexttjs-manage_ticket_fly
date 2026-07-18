import { Currency } from "@/types/common/enums";
import { AirportTransferBookingStatus } from "../enums";
import { PaymentStatus } from "@/types/common/payment";
import { AirportTransferBookingPassenger } from "./booking-passenger.types";
import { AirportTransferBookingContact } from "./booking-contact.types";
import { AirportTransferBookingFlight } from "./booking-flight.types";
import { AirportTransferBookingExtra } from "./booking-extra.types";
import { AirportTransferBookingTimeline } from "./booking-timeline.types";
import { AirportTransferBookingStatusHistory } from "./booking-history.types";
import { AirportTransferInventoryLock } from "../trip/inventory-lock.types";
import { AirportTransferReview } from "../review/review.types";

export interface AirportTransferBooking {
  id: string;

  transferId: string;
  tripId?: string;
  vehicleId?: string;
  userId: string;

  status: AirportTransferBookingStatus;

  pickupTime: string;

  totalAmount: number;

  currency: Currency;

  paymentStatus: PaymentStatus;

  passengers: AirportTransferBookingPassenger[];

  contact?: AirportTransferBookingContact;

  flight?: AirportTransferBookingFlight;

  extras: AirportTransferBookingExtra[];

  timeline: AirportTransferBookingTimeline[];

  histories: AirportTransferBookingStatusHistory[];

  locks: AirportTransferInventoryLock[];

  reviews: AirportTransferReview[];

  createdAt: string;
  updatedAt: string;
}
