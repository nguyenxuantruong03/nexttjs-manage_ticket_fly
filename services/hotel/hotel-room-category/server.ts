import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { RoomCategory } from "@/types/bookings/hotel/room/room.types";

export const HotelRoomCategoryServerService = createServerCrudApi<RoomCategory>(
  API.HOTEL_ROOM_CATEGORY,
);
