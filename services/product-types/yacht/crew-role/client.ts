import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";

export const YachtCrewRoleService = createCrudApi<YachtCrewRole>(
  clientHttp,
  API.YACHT_CREW_ROLE,
);