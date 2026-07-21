import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Country } from "@/types/bookings/location/country";

export const CountryServerService = createServerCrudApi<Country>(
  API.COUNTRY,
);
