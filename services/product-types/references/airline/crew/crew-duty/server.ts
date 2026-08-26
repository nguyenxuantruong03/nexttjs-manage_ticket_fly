import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

export const FlyCrewDutyServerService = createServerCrudApi<FlyCrewDuty>(
  API.FLY_CREW_DUTY,
);
