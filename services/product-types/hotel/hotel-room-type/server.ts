import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";

export const HotelRoomTypeServerService =
  createServerCrudApi<HotelRoomType>(API.HOTEL_ROOM_TYPE);
