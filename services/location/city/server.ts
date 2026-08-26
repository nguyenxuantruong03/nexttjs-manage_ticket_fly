import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { City } from "@/types/location/city";

export const CityServerService = createServerCrudApi<City>(API.CITY);
