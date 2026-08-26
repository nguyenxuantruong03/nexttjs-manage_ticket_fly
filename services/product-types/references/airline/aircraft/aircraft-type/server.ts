import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

export const FlyAircraftTypeServerService =
  createServerCrudApi<FlyAircraftType>(API.FLY_AIRCRAFT_TYPE);
