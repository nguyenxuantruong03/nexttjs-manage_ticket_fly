import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { BedType } from "@/types/bookings/hotel/room/room.types";

export const HotelBedTypeService = createCrudApi<BedType>(
  clientHttp,
  API.HOTEL_BED_TYPE,
);
