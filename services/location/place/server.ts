import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Place } from "@/types/bookings/location/place";

export const PlaceServerService = createServerCrudApi<Place>(
  API.PLACE,
);
