import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { PlaceType } from "@/types/location/place/place-type.type";

export const PlaceTypeService = createCrudApi<PlaceType>(
  clientHttp,
  API.PLACE_TYPE,
);
