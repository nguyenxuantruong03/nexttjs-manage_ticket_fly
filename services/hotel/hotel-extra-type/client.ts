import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { ExtraType } from "@/types/bookings/hotel/service/extra.type";

export const HotelExtraTypeService = createCrudApi<ExtraType>(
  clientHttp,
  API.HOTEL_EXTRA_TYPE,
);
