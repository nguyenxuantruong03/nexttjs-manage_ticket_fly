import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { ReasonCode } from "@/types/common/catalog/reason-code.type";

export const ReasonCodeServerService = createServerCrudApi<ReasonCode>(
  API.REASON_CODE,
);
