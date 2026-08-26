import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";

export const FlyCrewRoleServerService = createServerCrudApi<FlyCrewRole>(
  API.FLY_CREW_ROLE,
);
