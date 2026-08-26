import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { RoomView } from "@/types/product-types/hotel/room/room.types";

export const HotelRoomViewService = createCrudApi<RoomView>(
  clientHttp,
  API.HOTEL_ROOM_VIEW,
);
