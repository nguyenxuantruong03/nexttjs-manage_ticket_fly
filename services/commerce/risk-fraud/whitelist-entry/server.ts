import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { WhitelistEntry } from "@/types/common/commerce/risk-fraud.type";

export const WhitelistEntryServerService = createServerCrudApi<WhitelistEntry>(
  API.WHITELIST_ENTRY,
);
