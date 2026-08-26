import { HotelBooking } from "./booking";

export interface HotelBookingStatusHistory {
  id: string;

  bookingId: string;
  booking?: HotelBooking;

  status: HotelBookingStatusHistory;

  note?: string;

  createdAt: Date;
}