import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { ReasonContext } from "@/types/common/catalog/reason-code.type";

export const ReasonContextService = createCrudApi<ReasonContext>(
  clientHttp,
  API.REASON_CONTEXT,
);
