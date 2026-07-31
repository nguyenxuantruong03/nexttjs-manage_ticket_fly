import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { ExtraType } from "@/types/bookings/hotel/service/extra.type";

export const HotelExtraTypeServerService = createServerCrudApi<ExtraType>(
  API.HOTEL_EXTRA_TYPE,
);
