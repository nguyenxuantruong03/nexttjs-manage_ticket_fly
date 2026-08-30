import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";
import { FlyFormSchema } from "../schema/core/fly.schema";

export function initFlyPackageMapperValues(
  ticketFly: Fly,
): Pick<FlyFormSchema, "flyPackageMapper"> {
  return {
    flyPackageMapper:
      ticketFly.flyPackageMapper?.map((pkg) => ({
        packageId: pkg.packageId ?? "",
      })) ?? [],
  };
}
