import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { ServiceType } from "@/types/common/catalog/service-type.type";


export const ServiceTypeServerService = createServerCrudApi<ServiceType>(
  API.SERVICE_TYPE,
);