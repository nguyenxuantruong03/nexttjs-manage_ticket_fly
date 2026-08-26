import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { RoomCategory } from "@/types/product-types/hotel/room/room.types";

export const HotelRoomCategoryService = createCrudApi<RoomCategory>(
  clientHttp,
  API.HOTEL_ROOM_CATEGORY,
);
