import { BusBoardingPass } from "./boarding-pass.types";
import { BusTicketStatus } from "../enums";
import { BusBooking } from "../booking/booking.types";

export interface BusTicket {
  id: string;

  bookingId: string;
  booking: BusBooking;

  ticketNumber: string;

  issuedAt: string | null;

  status: BusTicketStatus;

  seatNumber: string | null;

  qrCode: string | null;

  boardingPass: BusBoardingPass | null;

  barcode: string | null;
}