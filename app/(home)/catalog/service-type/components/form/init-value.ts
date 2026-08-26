import { ServiceTypeFormSchema } from "./schema";

import { serviceTypeDefaultValues } from "./default-values";
import { ServiceType } from "@/types/common/catalog/service-type.type";

export function initServiceTypeFormValues(
  serviceType?: ServiceType,
): ServiceTypeFormSchema {
  if (!serviceType) {
    return structuredClone(serviceTypeDefaultValues);
  }

  return structuredClone(serviceType);
}
