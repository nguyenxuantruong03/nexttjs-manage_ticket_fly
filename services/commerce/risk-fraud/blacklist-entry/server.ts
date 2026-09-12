import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { BlacklistEntry } from "@/types/common/commerce/risk-fraud.type";

export const BlacklistEntryServerService = createServerCrudApi<BlacklistEntry>(
  API.BLACKLIST_ENTRY,
);
