import { Bus } from "@/types/product-types/bus/core/bus.types";
import { BusFormSchema } from "../schema/core/bus.schema";
import { busDefaultValues } from "./default-values";

export function initTicketBusFormValues(ticketBus?: Bus): BusFormSchema {
  if (!ticketBus) {
    return structuredClone(busDefaultValues);
  }

  return structuredClone(ticketBus);
}
