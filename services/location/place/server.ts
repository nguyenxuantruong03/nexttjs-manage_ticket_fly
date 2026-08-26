import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Place } from "@/types/location/place/place";

export const PlaceServerService = createServerCrudApi<Place>(API.PLACE);
