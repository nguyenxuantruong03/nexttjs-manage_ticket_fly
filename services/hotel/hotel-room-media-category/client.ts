import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { RoomMediaCategory } from "@/types/bookings/hotel/room/room-media.types";

export const HotelRoomMediaCategoryService = createCrudApi<RoomMediaCategory>(
  clientHttp,
  API.HOTEL_ROOM_MEDIA_CATEGORY,
);
