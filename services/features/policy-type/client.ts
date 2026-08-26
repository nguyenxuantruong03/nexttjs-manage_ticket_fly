import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { PolicyType } from "@/types/common/features/policy/policy-type";

export const PolicyTypeService = createCrudApi<PolicyType>(
  clientHttp,
  API.POLICY_TYPE,
);
