import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { Continent } from "@/types/location/country/continent.type";

export const ContinentServerService = createServerCrudApi<Continent>(
  API.CONTINENT,
);
