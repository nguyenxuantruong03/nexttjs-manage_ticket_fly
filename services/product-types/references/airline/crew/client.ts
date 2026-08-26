import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { FlyCrew } from "@/types/product-types/references/airline/crew/crew.types";

export const FlyCrewService = createCrudApi<FlyCrew>(clientHttp, API.FLY_CREW);
