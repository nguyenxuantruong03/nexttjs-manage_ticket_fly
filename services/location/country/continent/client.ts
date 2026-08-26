import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { Continent } from "@/types/location/country/continent.type";

export const ContinentService = createCrudApi<Continent>(
  clientHttp,
  API.CONTINENT,
);
