import { PromotionFormSchema } from "./schema";
import { promotionDefaultValues } from "./default-values";
import { Promotion } from "@/types/common/commerce/promotion/promotion";

export function initPromotionFormValues(
  promotion?: Promotion,
): PromotionFormSchema {
  if (!promotion) {
    return structuredClone(promotionDefaultValues);
  }

  return structuredClone(promotion);
}