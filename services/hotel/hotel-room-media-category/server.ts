import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { RoomMediaCategory } from "@/types/bookings/hotel/room/room-media.types";

export const HotelRoomMediaCategoryServerService =
  createServerCrudApi<RoomMediaCategory>(API.HOTEL_ROOM_MEDIA_CATEGORY);
