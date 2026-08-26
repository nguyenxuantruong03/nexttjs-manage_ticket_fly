import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Place } from "@/types/location/place/place";

export const PlaceService = createCrudApi<Place>(clientHttp, API.PLACE);
