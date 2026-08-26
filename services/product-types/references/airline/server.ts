import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

export const FlyAirlineServerService = createServerCrudApi<FlyAirline>(
  API.FLY_AIRLINE,
);