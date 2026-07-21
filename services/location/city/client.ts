import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { City } from "@/types/bookings/location/city";

export const CityService = createCrudApi<City>(clientHttp, API.CITY);
