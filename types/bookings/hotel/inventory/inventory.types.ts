import { HotelBookingRoom } from "../bookings/booking-room.types";
import { HotelRatePlan } from "../pricing/rate-plan.types";
import { HotelAvailability } from "./availability.types";
import { HotelInventoryLock } from "./lock.types";

export interface HotelInventory {
  id: string;

  hotelId: string;

  roomTypeId: string;

  availability?: HotelAvailability | null;

  ratePlans: HotelRatePlan[];

  locks: HotelInventoryLock[];

  bookingRooms: HotelBookingRoom[];
}
