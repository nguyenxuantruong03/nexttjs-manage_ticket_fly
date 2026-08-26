import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

export const FlyCrewDutyService = createCrudApi<FlyCrewDuty>(
  clientHttp,
  API.FLY_CREW_DUTY,
);