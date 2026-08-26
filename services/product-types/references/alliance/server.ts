import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";

export const FlyAllianceServerService = createServerCrudApi<FlyAlliance>(
  API.FLY_ALLIANCE,
);
