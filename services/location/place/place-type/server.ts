import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { PlaceType } from "@/types/location/place/place-type.type";

export const PlaceTypeServerService = createServerCrudApi<PlaceType>(
  API.PLACE_TYPE,
);
