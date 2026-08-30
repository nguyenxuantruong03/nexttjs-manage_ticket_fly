import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

import { defaultYachtValues } from "../default-values";

import { initYachtAvailabilityValues } from "./availability";
import { initYachtBasicValues } from "./basic";
import { initYachtCrewValues } from "./crew";
import { initYachtImageValues } from "./image";
import { initYachtNoticeValues } from "./notice";
import { initYachtPolicyValues } from "./policy";
import { initYachtPriceValues } from "./price";
import { initYachtRouteValues } from "./route.init-value"
import { initYachtVehicleValues } from "./vehicle";
import { initYachtExtraMapperValues } from "./extra";
import { initYachtPackageMapperValues } from "./package";

export function initYachtFormValues(yacht?: Yacht): YachtFormSchema {
  if (!yacht) {
    return structuredClone(defaultYachtValues);
  }

  return {
    ...initYachtBasicValues(yacht),
    ...initYachtVehicleValues(yacht),
    ...initYachtImageValues(yacht),
    ...initYachtNoticeValues(yacht),
    ...initYachtCrewValues(yacht),
    ...initYachtExtraMapperValues(yacht),
    ...initYachtPackageMapperValues(yacht),
    ...initYachtRouteValues(yacht),
    ...initYachtAvailabilityValues(yacht),
    ...initYachtPriceValues(yacht),
    ...initYachtPolicyValues(yacht),
  };
}
