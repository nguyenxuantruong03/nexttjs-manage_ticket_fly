import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { Extra } from "@/types/common/commerce/extra/extra.type";

export const ExtraService = createCrudApi<Extra>(clientHttp, API.EXTRA);
