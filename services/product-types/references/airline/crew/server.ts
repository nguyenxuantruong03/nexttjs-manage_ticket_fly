import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { FlyCrew } from "@/types/product-types/references/airline/crew/crew.types";


export const FlyCrewServerService = createServerCrudApi<FlyCrew>(API.FLY_CREW);
