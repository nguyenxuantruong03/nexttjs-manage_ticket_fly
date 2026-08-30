import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";
import { FlyFormSchema } from "../schema/core/fly.schema";

export function initFlyExtraMapperValues(
  ticketFly: Fly,
): Pick<FlyFormSchema, "flyExtraMapper"> {
  return {
    flyExtraMapper:
      ticketFly.flyExtraMapper?.map((extra) => ({
        extraId: extra.extraId ?? "",
        active: extra.active ?? true,
        sortOrder: extra.sortOrder ?? 0,
      })) ?? [],
  };
}
