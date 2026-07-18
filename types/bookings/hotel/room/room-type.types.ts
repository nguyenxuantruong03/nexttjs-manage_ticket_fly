import { HotelBookingRoom } from "../bookings/booking-room.types";
import { HotelInventory } from "../inventory/inventory.types";
import { HotelRoom } from "./room.types";

export interface HotelRoomType {
  id: string;

  hotelId: string;

  name: string;

  description?: string | null;

  inventories: HotelInventory[];

  bookingRooms: HotelBookingRoom[];

  rooms: HotelRoom[];

  active: boolean;

  sortOrder: number;

  createdAt: Date;

  updatedAt: Date;
}
