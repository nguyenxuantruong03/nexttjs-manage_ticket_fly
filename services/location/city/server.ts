import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { City } from "@/types/bookings/location/city";

export const CityServerService = createServerCrudApi<City>(API.CITY);
