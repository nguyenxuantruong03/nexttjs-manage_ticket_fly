import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";

import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";

export const ExtraFeeTypeServerService = createServerCrudApi<ExtraFeeType>(
  API.EXTRA_FEE_TYPE,
);
