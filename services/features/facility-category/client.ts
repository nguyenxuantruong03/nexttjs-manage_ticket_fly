import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Facility } from "@/types/common/features/facility/facility";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";

export const FacilityCategoryService = createCrudApi<FacilityCategory>(
  clientHttp,
  API.FACILITY_CATEGORY,
);
