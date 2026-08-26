import { HotelInventory } from "../inventory/inventory.types";
import { HotelRoomType } from "../room/room-type.types";
import { HotelBooking } from "./booking";
import { HotelBookingRoomPrice } from "./booking-room-price";

export interface HotelBookingRoom {
  id: string;

  bookingId: string;
  booking?: HotelBooking;

  inventoryId?: string;
  inventory?: HotelInventory;

  roomName: string;

  roomTypeId?: string;
  roomType?: HotelRoomType;

  quantity: number;
  adults: number;
  children: number;

  price?: HotelBookingRoomPrice;

  createdAt: Date;
}