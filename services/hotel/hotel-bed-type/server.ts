import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { BedType } from "@/types/bookings/hotel/room/room.types";

export const HotelBedTypeServerService = createServerCrudApi<BedType>(
  API.HOTEL_BED_TYPE,
);
