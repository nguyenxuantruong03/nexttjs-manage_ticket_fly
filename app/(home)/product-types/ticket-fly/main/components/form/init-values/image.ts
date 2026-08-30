import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

import { FlyFormSchema } from "../schema/core/fly.schema";

export function initFlyImageValues(
  ticketFly: Fly,
): Pick<FlyFormSchema, "images"> {
  return {
    images:
      ticketFly.images?.map((image) => ({
        id: image.id ?? "",
        flyId: image.flyId ?? "",
        mediaId: image.mediaId ?? "",
        categoryId: image.categoryId ?? "",
        isPrimary: image.isPrimary ?? false,
        sortOrder: image.sortOrder ?? 0,
        createdAt: image.createdAt ?? "",
        updatedAt: image.updatedAt ?? "",
      })) ?? [],
  };
}
