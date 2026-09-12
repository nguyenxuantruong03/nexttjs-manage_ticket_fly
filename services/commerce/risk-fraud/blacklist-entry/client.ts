import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { BlacklistEntry } from "@/types/common/commerce/risk-fraud.type";

export const BlacklistEntryService = createCrudApi<BlacklistEntry>(
  clientHttp,
  API.BLACKLIST_ENTRY,
);
