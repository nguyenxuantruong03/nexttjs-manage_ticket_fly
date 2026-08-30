import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtImageValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "image"> {
  return {
    image:
      yacht.image?.map((image) => ({
        mediaId: image.mediaId ?? "",
        categoryId: image.categoryId ?? "",
        isPrimary: image.isPrimary ?? false,
        sortOrder: image.sortOrder ?? 0,
      })) ?? [],
  };
}
