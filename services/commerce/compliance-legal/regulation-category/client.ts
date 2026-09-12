import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { RegulationCategory } from "@/types/common/commerce/compliance-legal.type";


export const RegulationCategoryService =
  createCrudApi<RegulationCategory>(
    clientHttp,
    API.REGULATION_CATEGORY,
  );