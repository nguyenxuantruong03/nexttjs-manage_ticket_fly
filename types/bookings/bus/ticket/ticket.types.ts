import { BusTicketStatus } from "../enums";
import { BusBoardingPass } from "./boarding-pass.types";

export interface BusTicket {
  id: string;

  bookingId: string;

  ticketNumber: string;

  issuedAt?: string;

  status: BusTicketStatus;

  seatNumber?: string;

  qrCode?: string;

  boardingPass?: BusBoardingPass;

  barcode?: string;
}