import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { PolicyType } from "@/types/common/features/policy/policy-type";

export const PolicyTypeServerService = createServerCrudApi<PolicyType>(
  API.POLICY_TYPE,
);
