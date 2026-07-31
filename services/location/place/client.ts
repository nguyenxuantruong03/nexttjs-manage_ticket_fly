import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Place } from "@/types/bookings/location/place";

export const PlaceService = createCrudApi<Place>(clientHttp, API.PLACE);
