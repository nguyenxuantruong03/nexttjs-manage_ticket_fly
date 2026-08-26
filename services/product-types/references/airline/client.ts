import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

export const FlyAirlineService = createCrudApi<FlyAirline>(
  clientHttp,
  API.FLY_AIRLINE,
);