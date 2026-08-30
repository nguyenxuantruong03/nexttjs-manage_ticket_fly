import { Bus } from "@/types/product-types/bus/core/bus.types";
import { BusFormSchema } from "../schema/core/bus.schema";

export function initBusMediaValues(
  ticketBus: Bus,
): Pick<BusFormSchema, "images"> {
  return {
    images:
      ticketBus.images?.map((image) => ({
        mediaId: image.mediaId ?? "",
        categoryId: image.categoryId ?? "",
        alt: image.alt ?? "",
        isPrimary: image.isPrimary ?? false,
        sortOrder: image.sortOrder ?? 0,
      })) ?? [],
  };
}
