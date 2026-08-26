import { CouponFormSchema } from "./schema";
import { couponDefaultValues } from "./default-values";
import { Coupon } from "@/types/common/commerce/coupon";

export function initCouponFormValues(
  coupon?: Coupon,
): CouponFormSchema {
  if (!coupon) {
    return structuredClone(couponDefaultValues);
  }

  return structuredClone(coupon);
}