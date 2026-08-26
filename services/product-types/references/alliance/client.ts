import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";

export const FlyAllianceService = createCrudApi<FlyAlliance>(
  clientHttp,
  API.FLY_ALLIANCE,
);
