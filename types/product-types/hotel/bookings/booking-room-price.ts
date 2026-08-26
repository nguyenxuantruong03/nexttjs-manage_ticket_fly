import { HotelBookingRoom } from "./booking-room-type";

export interface HotelBookingRoomPrice {
  id: string;

  bookingRoomId: string;
  bookingRoom?: HotelBookingRoom;

  originalPrice: number;
  nightlyPrice: number;

  nights: number;

  subtotal: number;

  tax: number;
  serviceFee: number;
  discount: number;

  total: number;
}