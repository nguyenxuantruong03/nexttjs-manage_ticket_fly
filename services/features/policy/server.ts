import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";

import { Policy } from "@/types/common/features/policy/policy";

export const PolicyServerService = createServerCrudApi<Policy>(API.POLICY);
