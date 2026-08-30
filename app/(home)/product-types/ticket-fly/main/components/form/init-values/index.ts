import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

import { FlyDefaultValues } from "../default-values";

import { initFlyBasicValues } from "./basic";
import { initFlyImageValues } from "./image";
import { initFlyNoticeValues } from "./notice";
import { initFlyPolicyValues } from "./policy";
import { initFlyPriceValues } from "./price";
import { initFlyRouteValues } from "./route.init-value";
import { initFlyScheduleValues } from "./schedule";
import { FlyFormSchema } from "../schema/core/fly.schema";
import { initFlyExtraMapperValues } from "./extra";
import { initFlyPackageMapperValues } from "./package";

export function initTicketFlyFormValues(ticketFly?: Fly): FlyFormSchema {
  if (!ticketFly) {
    return structuredClone(FlyDefaultValues);
  }

  return {
    ...initFlyBasicValues(ticketFly),
    ...initFlyExtraMapperValues(ticketFly),
    ...initFlyPackageMapperValues(ticketFly),
    ...initFlyRouteValues(ticketFly),
    ...initFlyPolicyValues(ticketFly),
    ...initFlyPriceValues(ticketFly),
    ...initFlyNoticeValues(ticketFly),
    ...initFlyImageValues(ticketFly),
    ...initFlyScheduleValues(ticketFly),
  };
}
