import { HotelBookingRoomPrice } from "./booking-room-price";

export interface HotelBookingRoom {
  id: string;

  bookingId: string;

  inventoryId?: string | null;

  roomName: string;

  roomTypeId?: string | null;

  quantity: number;

  adults: number;

  children: number;

  price?: HotelBookingRoomPrice | null;

  createdAt: Date;
}
