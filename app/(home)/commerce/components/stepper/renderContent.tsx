"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  BookingItemTypeForm,
  BookingTypeForm,
  CouponForm,
  ExtraFeeTypeForm,
  ExtraTypeForm,
  ExtraMainForm,
  PackageForm,
  PriceRuleTypeForm,
  PromotionMainForm,
  PromotionRuleForm,
} from "./forms";
import { useCommerceStepperHooks } from "./hooks";

interface Props {
  mainStep: string;
  subStep: string;
  hooks: ReturnType<typeof useCommerceStepperHooks>;
}

export function renderCommerceStepperContent({
  mainStep,
  subStep,
  hooks,
}: Props) {
  const {
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
  } = hooks;

  const currentHook = {
    "booking-item-type": bookingItemType,
    "booking-type": bookingType,
    coupon: coupon,
    "extra-fee-type": extraFeeType,
    "extra-type": extraType,
    "extra-main": extraMain,
    package: packageType,
    "price-rule-type": priceRuleType,
    "promotion-main": promotionMain,
    "promotion-rule": promotionRule,
  }[subStep];

  if (currentHook?.isLoading) {
    return <LoadingPage />;
  }

  if (currentHook?.isError) {
    return <ErrorPage />;
  }

  if (mainStep === "booking-item-type" && subStep === "booking-item-type") {
    return (
      <BookingItemTypeForm
        bookingTypeData={bookingItemType.data?.bookingTypeData ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "booking-type" && subStep === "booking-type") {
    return <BookingTypeForm redirect={false} />;
  }

  if (mainStep === "coupon" && subStep === "coupon") {
    return (
      <CouponForm
        bookingTypeData={coupon.data?.bookingTypeData ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "extra" && subStep === "extra-fee-type") {
    return (
      <ExtraFeeTypeForm
        bookingTypeData={extraFeeType.data?.bookingTypes ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "extra" && subStep === "extra-type") {
    return (
      <ExtraTypeForm
        bookingTypeData={extraType.data?.bookingTypeData ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "extra" && subStep === "extra-main") {
    return (
      <ExtraMainForm
        currencyData={extraMain.data?.currencyData ?? []}
        extraTypeData={extraMain.data?.extraTypeData ?? []}
        bookingTypeData={extraMain.data?.bookingTypeData ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "package" && subStep === "package") {
    return (
      <PackageForm
        currencyData={packageType.data?.currencyData ?? []}
        bookingTypeData={packageType.data?.bookingTypeData ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "price-rule-type" && subStep === "price-rule-type") {
    return (
      <PriceRuleTypeForm
        bookingTypeData={priceRuleType.data?.bookingTypeData ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "promotion" && subStep === "promotion-main") {
    return (
      <PromotionMainForm
        bookingTypeData={promotionMain.data?.bookingTypeData ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "promotion" && subStep === "promotion-rule") {
    return (
      <PromotionRuleForm
        promotionData={promotionRule.data?.promotionData ?? []}
        bookingTypeData={promotionRule.data?.bookingTypeData ?? []}
        redirect={false}
      />
    );
  }

  return null;
}
