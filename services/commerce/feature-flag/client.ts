import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { FeatureFlag } from "@/types/common/commerce/feature-flag.type";

export const FeatureFlagService = createCrudApi<FeatureFlag>(
  clientHttp,
  API.FEATURE_FLAG,
);
