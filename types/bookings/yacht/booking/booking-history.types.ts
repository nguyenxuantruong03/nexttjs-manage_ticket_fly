import { YachtBookingStatus } from "../enums";


export interface YachtBookingStatusHistory {
  id: string;

  bookingId: string;

  fromStatus?: YachtBookingStatus | null;

  toStatus: YachtBookingStatus;

  note?: string | null;

  createdAt: Date;
}