import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { FeatureFlag } from "@/types/common/commerce/feature-flag.type";


export const FeatureFlagServerService = createServerCrudApi<FeatureFlag>(
  API.FEATURE_FLAG,
);
