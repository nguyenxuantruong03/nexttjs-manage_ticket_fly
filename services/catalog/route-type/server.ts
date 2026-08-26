import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { RouteType } from "@/types/common/catalog/route-type.type";

export const RouteTypeServerService = createServerCrudApi<RouteType>(
  API.ROUTE_TYPE,
);
