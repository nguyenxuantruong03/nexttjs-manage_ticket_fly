import { RouteTypeFormSchema } from "./schema";
import { routeTypeDefaultValues } from "./default-values";

import { RouteType } from "@/types/common/catalog/route-type.type";

export function initRouteTypeFormValues(
  routeType?: RouteType,
): RouteTypeFormSchema {
  if (!routeType) {
    return structuredClone(routeTypeDefaultValues);
  }

  return {
    name: routeType.name ?? "",
    description: routeType.description ?? null,
    icon: routeType.icon ?? null,

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      routeType.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: routeType.active ?? true,
    sortOrder: routeType.sortOrder ?? 0,
  };
}
