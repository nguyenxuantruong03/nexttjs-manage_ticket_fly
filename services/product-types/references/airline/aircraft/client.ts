import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";

export const FlyAircraftService = createCrudApi<FlyAircraft>(
  clientHttp,
  API.FLY_AIRCRAFT,
);
