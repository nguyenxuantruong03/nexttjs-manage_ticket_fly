import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { RouteType } from "@/types/common/catalog/route-type.type";

export const RouteTypeService = createCrudApi<RouteType>(
  clientHttp,
  API.ROUTE_TYPE,
);
