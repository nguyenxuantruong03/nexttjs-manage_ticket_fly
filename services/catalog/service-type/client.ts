import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { ServiceType } from "@/types/common/catalog/service-type.type";

export const ServiceTypeService = createCrudApi<ServiceType>(
  clientHttp,
  API.SERVICE_TYPE,
);
