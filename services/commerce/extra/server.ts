import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { Extra } from "@/types/common/commerce/extra/extra.type";

export const ExtraServerService = createServerCrudApi<Extra>(API.EXTRA);
