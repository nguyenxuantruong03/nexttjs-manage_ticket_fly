import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";

export const HotelRoomTypeService = createCrudApi<HotelRoomType>(
  clientHttp,
  API.HOTEL_ROOM_TYPE,
);
