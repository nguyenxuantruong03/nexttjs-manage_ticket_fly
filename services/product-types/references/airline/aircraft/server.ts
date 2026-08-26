import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";

export const FlyAircraftServerService = createServerCrudApi<FlyAircraft>(
  API.FLY_AIRCRAFT,
);
