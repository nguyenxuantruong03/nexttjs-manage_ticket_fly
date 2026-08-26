import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";

import { Policy } from "@/types/common/features/policy/policy";

export const PolicyService = createCrudApi<Policy>(clientHttp, API.POLICY);
