import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Hotel } from "@/types/bookings/hotel/core/hotel.types";

export const HotelServerService = createServerCrudApi<Hotel>(API.HOTEL);
