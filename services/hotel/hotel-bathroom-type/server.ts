import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { BathroomType } from "@/types/bookings/hotel/room/room.types";

export const HotelBathroomTypeServerService = createServerCrudApi<BathroomType>(
  API.HOTEL_BATHROOM_TYPE,
);
