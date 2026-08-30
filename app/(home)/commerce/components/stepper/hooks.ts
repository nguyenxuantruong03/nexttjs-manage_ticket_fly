"use client";

import { useBookingItemTypeCreateFormData } from "@/hooks/commerce/booking-item-type/useBookingItemTypeCreateFormData";
import { useBookingTypeCreateFormData } from "@/hooks/commerce/booking-type/useBookingTypeCreateFormData";
import { useCouponCreateFormData } from "@/hooks/commerce/coupon/useCouponCreateFormData";
import { useExtraFeeTypeCreateFormData } from "@/hooks/commerce/extra-fee-type/useExtraFeeTypeCreateFormData";
import { useExtraTypeCreateFormData } from "@/hooks/commerce/extra-type/useExtraTypeCreateFormData";
import { useExtraCreateFormData } from "@/hooks/commerce/extra/useExtraCreateFormData";
import { usePackageCreateFormData } from "@/hooks/commerce/package/usePackageCreateFormData";
import { usePriceRuleTypeCreateFormData } from "@/hooks/commerce/price-rule-type/usePriceRuleTypeCreateFormData";
import { usePromotionRuleCreateFormData } from "@/hooks/commerce/promotion-rule/usePromotionRuleCreateFormData";
import { usePromotionCreateFormData } from "@/hooks/commerce/promotion/usePromotionCreateFormData";

export function useCommerceStepperHooks(subStep: string) {
  /**
   * ==========================
   * COMMERCE
   * ==========================
   */

  const bookingItemType = useBookingItemTypeCreateFormData(
    subStep === "booking-item-type",
  );

  const bookingType = useBookingTypeCreateFormData(subStep === "booking-type");

  const coupon = useCouponCreateFormData(subStep === "coupon");

  const extraFeeType = useExtraFeeTypeCreateFormData(
    subStep === "extra-fee-type",
  );

  const extraType = useExtraTypeCreateFormData(subStep === "extra-type");

  const extraMain = useExtraCreateFormData(subStep === "extra-main");

  const packageType = usePackageCreateFormData(subStep === "package");

  const priceRuleType = usePriceRuleTypeCreateFormData(
    subStep === "price-rule-type",
  );

  const promotionMain = usePromotionCreateFormData(
    subStep === "promotion-main",
  );

  const promotionRule = usePromotionRuleCreateFormData(
    subStep === "promotion-rule",
  );

  return {
    bookingItemType,
    bookingType,
    coupon,
    extraFeeType,
    extraType,
    extraMain,
    packageType,
    priceRuleType,
    promotionMain,
    promotionRule,
  };
}
