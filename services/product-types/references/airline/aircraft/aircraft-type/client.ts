import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

export const FlyAircraftTypeService = createCrudApi<FlyAircraftType>(
  clientHttp,
  API.FLY_AIRCRAFT_TYPE,
);
