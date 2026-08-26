import { AirportTransferExtraMapper } from "../airportTransfer-extra-mapper.type";
import { AirportTransferBooking } from "./booking.types";

export interface AirportTransferBookingExtra {
  id: string;

  bookingId: string;

  booking: AirportTransferBooking;

  extraId: string | null;

  extra: AirportTransferExtraMapper | null;

  name: string;

  quantity: number;

  price: number;

  total: number;

  createdAt: string;
}
