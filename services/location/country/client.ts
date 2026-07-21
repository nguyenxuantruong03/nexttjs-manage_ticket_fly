import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Country } from "@/types/bookings/location/country";

export const CountryService = createCrudApi<Country>(clientHttp, API.COUNTRY);
