import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtExtraMapperValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "yachtExtraMapper"> {
  return {
    yachtExtraMapper:
      yacht.yachtExtraMapper?.map((extra) => ({
        extraId: extra.extraId ?? "",
        active: extra.active ?? true,
        sortOrder: extra.sortOrder ?? 0,
      })) ?? [],
  };
}
