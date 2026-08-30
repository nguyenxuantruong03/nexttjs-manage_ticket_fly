import { Bus } from "@/types/product-types/bus/core/bus.types";
import { BusFormSchema } from "../schema/core/bus.schema";

export function initBusExtraValues(
  ticketBus: Bus,
): Pick<BusFormSchema, "busExtraMapper"> {
  return {
    busExtraMapper:
      ticketBus.busExtraMapper?.map((extra) => ({
        extraId: extra.extraId ?? "",
        active: extra.active ?? true,
        sortOrder: extra.sortOrder ?? 0,
      })) ?? [],
  };
}
