import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";

export const FlyCrewRoleService = createCrudApi<FlyCrewRole>(
  clientHttp,
  API.FLY_CREW_ROLE,
);
