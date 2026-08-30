import { Bus } from "@/types/product-types/bus/core/bus.types";

import { busDefaultValues } from "../default-values";

import { initBusBasicValues } from "./basic";
import { initBusRoutesValues } from "./route.init-value";
import { initBusVehicleValues } from "./vehicle";
import { initBusPriceValues } from "./price";
import { initBusPolicyValues } from "./policy";
import { initBusExtraValues } from "./extra";
import { initBusPackageValues } from "./package";
import { initBusMediaValues } from "./media";
import { BusFormSchema } from "../schema/core/bus.schema";

export function initTicketBusFormValues(ticketBus?: Bus): BusFormSchema {
  if (!ticketBus) {
    return structuredClone(busDefaultValues);
  }

  return {
    ...initBusBasicValues(ticketBus),
    ...initBusRoutesValues(ticketBus),
    ...initBusVehicleValues(ticketBus),
    ...initBusPriceValues(ticketBus),
    ...initBusPolicyValues(ticketBus),
    ...initBusExtraValues(ticketBus),
    ...initBusPackageValues(ticketBus),
    ...initBusMediaValues(ticketBus),
  };
}
