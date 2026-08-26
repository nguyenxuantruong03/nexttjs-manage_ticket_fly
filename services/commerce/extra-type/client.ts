import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

export const ExtraTypeService = createCrudApi<ExtraType>(
  clientHttp,
  API.EXTRA_TYPE,
);
