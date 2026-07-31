import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { RoomView } from "@/types/bookings/hotel/room/room.types";

export const HotelRoomViewServerService = createServerCrudApi<RoomView>(
  API.HOTEL_ROOM_VIEW,
);
