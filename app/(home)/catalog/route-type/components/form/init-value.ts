import { RouteTypeFormSchema } from "./schema";

import { routeTypeDefaultValues } from "./default-values";
import { RouteType } from "@/types/common/catalog/route-type.type";

export function initRouteTypeFormValues(
  routeType?: RouteType,
): RouteTypeFormSchema {
  if (!routeType) {
    return structuredClone(routeTypeDefaultValues);
  }

  return structuredClone(routeType);
}
