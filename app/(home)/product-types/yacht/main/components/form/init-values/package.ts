import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtPackageMapperValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "yachtPackageMapper"> {
  return {
    yachtPackageMapper:
      yacht.yachtPackageMapper?.map((pkg) => ({
        packageId: pkg.packageId ?? "",
      })) ?? [],
  };
}
