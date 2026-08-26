import { HotelBookingRoom } from "../bookings/booking-room-type";
import { Hotel } from "../core/hotel.types";
import { HotelRatePlan } from "../pricing/rate-plan.types";
import { HotelRoomType } from "../room/room-type.types";
import { HotelAvailability } from "./availability.types";
import { HotelInventoryLock } from "./lock.types";

export interface HotelInventory {
  id: string;

  hotelId: string;
  hotel: Hotel;

  roomTypeId: string;
  roomType: HotelRoomType;

  availability: HotelAvailability | null;

  ratePlans: HotelRatePlan[];

  locks: HotelInventoryLock[];

  bookingRooms: HotelBookingRoom[];
}