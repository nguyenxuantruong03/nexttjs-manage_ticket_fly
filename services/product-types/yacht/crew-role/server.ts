import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";

export const YachtCrewRoleServerService =
  createServerCrudApi<YachtCrewRole>(API.YACHT_CREW_ROLE);