import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { BathroomType } from "@/types/bookings/hotel/room/room.types";

export const HotelBathroomTypeService = createCrudApi<BathroomType>(
  clientHttp,
  API.HOTEL_BATHROOM_TYPE,
);
