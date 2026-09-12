import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { Regulation } from "@/types/common/commerce/compliance-legal.type";


export const RegulationServerService = createServerCrudApi<Regulation>(
  API.REGULATION,
);