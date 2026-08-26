import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Facility } from "@/types/common/features/facility/facility";

export const FacilityService = createCrudApi<Facility>(
  clientHttp,
  API.FACILITY,
);
