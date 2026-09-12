import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { WhitelistEntry } from "@/types/common/commerce/risk-fraud.type";

export const WhitelistEntryService = createCrudApi<WhitelistEntry>(
  clientHttp,
  API.WHITELIST_ENTRY,
);
