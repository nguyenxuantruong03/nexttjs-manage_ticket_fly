import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";

import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";

export const ExtraFeeTypeService = createCrudApi<ExtraFeeType>(
  clientHttp,
  API.EXTRA_FEE_TYPE,
);
