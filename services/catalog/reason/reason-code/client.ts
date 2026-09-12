import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { ReasonCode } from "@/types/common/catalog/reason-code.type";

export const ReasonCodeService = createCrudApi<ReasonCode>(
  clientHttp,
  API.REASON_CODE,
);
