import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";

export const FacilityCategoryServerService =
  createServerCrudApi<FacilityCategory>(API.FACILITY_CATEGORY);
