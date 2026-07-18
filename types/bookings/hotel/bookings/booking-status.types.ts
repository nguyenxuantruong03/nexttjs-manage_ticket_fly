import { HotelBookingStatus } from "../enum/enums";

export interface HotelBookingStatusHistory {
  id: string;

  bookingId: string;

  status: HotelBookingStatus;

  note?: string | null;

  createdAt: Date;
}
