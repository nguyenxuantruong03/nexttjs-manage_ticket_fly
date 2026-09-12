import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { ReasonContext } from "@/types/common/catalog/reason-code.type";

export const ReasonContextServerService = createServerCrudApi<ReasonContext>(
  API.REASON_CONTEXT,
);
