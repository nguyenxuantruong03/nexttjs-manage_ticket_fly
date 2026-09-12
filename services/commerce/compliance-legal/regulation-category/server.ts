import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { RegulationCategory } from "@/types/common/commerce/compliance-legal.type";

export const RegulationCategoryServerService =
  createServerCrudApi<RegulationCategory>(API.REGULATION_CATEGORY);
