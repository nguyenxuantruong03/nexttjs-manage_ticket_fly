import { ServiceTypeFormSchema } from "./schema";

import { serviceTypeDefaultValues } from "./default-values";

import { ServiceType } from "@/types/common/catalog/service-type.type";

export function initServiceTypeFormValues(
  serviceType?: ServiceType,
): ServiceTypeFormSchema {
  if (!serviceType) {
    return structuredClone(serviceTypeDefaultValues);
  }

  return {
    name: serviceType.name ?? "",
    description: serviceType.description ?? null,
    icon: serviceType.icon ?? null,

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      serviceType.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: serviceType.active ?? true,
    sortOrder: serviceType.sortOrder ?? 0,
  };
}
