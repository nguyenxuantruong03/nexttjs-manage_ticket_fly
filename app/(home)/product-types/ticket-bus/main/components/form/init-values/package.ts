import { Bus } from "@/types/product-types/bus/core/bus.types";
import { BusFormSchema } from "../schema/core/bus.schema";

export function initBusPackageValues(
  ticketBus: Bus,
): Pick<BusFormSchema, "busPackageMapper"> {
  return {
    busPackageMapper:
      ticketBus.busPackageMapper?.map((pkg) => ({
        packageId: pkg.packageId ?? "",
      })) ?? [],
  };
}
