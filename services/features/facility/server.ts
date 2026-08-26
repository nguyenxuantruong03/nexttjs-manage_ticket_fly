import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Facility } from "@/types/common/features/facility/facility";

export const FacilityServerService = createServerCrudApi<Facility>(
  API.FACILITY,
);
