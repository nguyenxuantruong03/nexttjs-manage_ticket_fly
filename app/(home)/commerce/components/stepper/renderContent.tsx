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
  LegalDocumentForm,
  RegulationForm,
  RegulationCategoryForm,
  TaxRuleForm,
  BlacklistEntryForm,
  WhitelistEntryForm,
  FeatureFlagForm,
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
    legalDocument,
    regulation,
    regulationCategory,
    taxRule,
    blacklistEntry,
    whitelistEntry,
    featureFlag,
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
    "legal-document": legalDocument,
    regulation: regulation,
    "regulation-category": regulationCategory,
    "tax-rule": taxRule,
    "blacklist-entry": blacklistEntry,
    "whitelist-entry": whitelistEntry,
    "feature-flag": featureFlag,
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
        mediaAssetData={extraMain.data?.mediaAssetData ?? []}
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
        mediaAssetData={packageType.data?.mediaAssetData ?? []}
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

  if (mainStep === "compliance-legal" && subStep === "legal-document") {
    return <LegalDocumentForm redirect={false} />;
  }

  if (mainStep === "compliance-legal" && subStep === "regulation") {
    return (
      <RegulationForm
        regulationCategoryData={regulation.data?.regulationCategoryData ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "compliance-legal" && subStep === "regulation-category") {
    return <RegulationCategoryForm redirect={false} />;
  }

  if (mainStep === "compliance-legal" && subStep === "tax-rule") {
    return (
      <TaxRuleForm
        bookingTypeData={taxRule.data?.bookingTypeData ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "risk-fraud" && subStep === "blacklist-entry") {
    return <BlacklistEntryForm redirect={false} />;
  }

  if (mainStep === "risk-fraud" && subStep === "whitelist-entry") {
    return <WhitelistEntryForm redirect={false} />;
  }

  if (mainStep === "feature-flag" && subStep === "feature-flag") {
    return <FeatureFlagForm redirect={false} />;
  }

  return null;
}
