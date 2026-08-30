import { CouponFormSchema } from "./schema";

import { couponDefaultValues } from "./default-values";

import { Coupon } from "@/types/common/commerce/coupon";

export function initCouponFormValues(coupon?: Coupon): CouponFormSchema {
  if (!coupon) {
    return structuredClone(couponDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    code: coupon.code ?? "",
    name: coupon.name ?? "",
    description: coupon.description ?? null,

    // ======================================================
    // DISCOUNT
    // ======================================================

    discountType: coupon.discountType,

    bookingTypeIds:
      coupon.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    value: coupon.value ?? 0,
    maxDiscount: coupon.maxDiscount ?? null,
    minimumAmount: coupon.minimumAmount ?? null,

    // ======================================================
    // DATE
    // ======================================================

    startDate: coupon.startDate ?? null,
    endDate: coupon.endDate ?? null,

    // ======================================================
    // USAGE
    // ======================================================

    usageLimit: coupon.usageLimit ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    active: coupon.active ?? true,
  };
}
