"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  AccessibilityForm,
  BathroomTypeForm,
  BedTypeForm,
  BrandForm,
  DiningMealTypeForm,
  DiningServiceTypeForm,
  ExtraTypeForm,
  FacilityCategoryForm,
  FacilityForm,
  MediaAssetForm,
  MediaCategoryForm,
  MealPlanForm,
  PolicyForm,
  PolicyTypeForm,
  RatePlanTypeForm,
  RoomCategoryForm,
  RoomMediaCategoryForm,
  RoomTypeForm,
  RoomViewForm,
  StarRatingForm,
  SustainabilityForm,
  TypeForm,
} from "./forms";

interface Props {
  mainStep: string;
  subStep: string;

  hooks: ReturnType<typeof import("./hooks").useHotelStepperHooks>;
}

export function renderHotelStepperContent({ mainStep, subStep, hooks }: Props) {
  const {
    hotelType,
    hotelBrand,
    hotelStarRating,
    hotelSustainability,

    roomCategory,
    roomType,
    bedType,
    bathroomType,
    roomView,
    roomMediaCategory,

    facilityCategory,
    facility,
    accessibility,

    mealPlan,
    diningMealType,
    diningServiceType,
    extraType,

    ratePlanType,
    policyType,
    policy,
    mediaCategory,
    mediaAsset,
  } = hooks;

  /**
   * ==========================
   * BASIC
   * ==========================
   */

  if (mainStep === "basic") {
    if (hotelType.isLoading) {
      return <LoadingPage />;
    }

    if (hotelType.error) {
      return <ErrorPage />;
    }

    if (subStep === "hotel-type") {
      return <TypeForm redirect={false} />;
    }

    if (subStep === "hotel-brand") {
      return <BrandForm redirect={false} />;
    }

    if (subStep === "hotel-star-rating") {
      return <StarRatingForm redirect={false} />;
    }

    if (subStep === "hotel-sustainability") {
      return <SustainabilityForm redirect={false} />;
    }
  }

  /**
   * ==========================
   * ROOM
   * ==========================
   */

  if (mainStep === "room") {
    if (roomCategory.isLoading || roomType.isLoading) {
      return <LoadingPage />;
    }

    if (roomCategory.error || roomType.error) {
      return <ErrorPage />;
    }

    if (subStep === "hotel-room-category") {
      return <RoomCategoryForm redirect={false} />;
    }

    if (subStep === "hotel-room-type") {
      return (
        <RoomTypeForm
          redirect={false}
          roomCategoryData={roomType.data?.roomCategories ?? []}
          roomViewData={roomType.data?.roomViews ?? []}
          bathroomTypeData={roomType.data?.bathroomTypes ?? []}
        />
      );
    }

    if (subStep === "hotel-bed-type") {
      return <BedTypeForm redirect={false} />;
    }

    if (subStep === "hotel-bathroom-type") {
      return <BathroomTypeForm redirect={false} />;
    }

    if (subStep === "hotel-room-view") {
      return <RoomViewForm redirect={false} />;
    }

    if (subStep === "hotel-room-media-category") {
      return <RoomMediaCategoryForm redirect={false} />;
    }
  }

  /**
   * ==========================
   * FACILITY
   * ==========================
   */

  if (mainStep === "facility") {
    if (facilityCategory.isLoading) {
      return <LoadingPage />;
    }

    if (facilityCategory.error) {
      return <ErrorPage />;
    }

    if (subStep === "hotel-facility-category") {
      return <FacilityCategoryForm redirect={false} />;
    }

    if (subStep === "hotel-facility" && facility.data?.facilityCategory) {
      return (
        <FacilityForm
          hotelFacilityCategoryData={facility.data.facilityCategory}
          redirect={false}
        />
      );
    }

    if (subStep === "hotel-accessibility") {
      return <AccessibilityForm redirect={false} />;
    }
  }

  /**
   * ==========================
   * FOOD
   * ==========================
   */

  if (mainStep === "food") {
    if (mealPlan.isLoading) {
      return <LoadingPage />;
    }

    if (mealPlan.error) {
      return <ErrorPage />;
    }

    if (subStep === "hotel-meal-plan") {
      return <MealPlanForm redirect={false} />;
    }

    if (subStep === "hotel-dining-meal-type") {
      return <DiningMealTypeForm redirect={false} />;
    }

    if (subStep === "hotel-dining-service-type") {
      return <DiningServiceTypeForm redirect={false} />;
    }

    if (subStep === "hotel-extra-type") {
      return <ExtraTypeForm redirect={false} />;
    }
  }

  /**
   * ==========================
   * PRICING & MEDIA
   * ==========================
   */

  if (mainStep === "pricing") {
    if (ratePlanType.isLoading || mediaAsset.isLoading) {
      return <LoadingPage />;
    }

    if (ratePlanType.error || mediaAsset.error) {
      return <ErrorPage />;
    }

    if (subStep === "hotel-rate-plan-type") {
      return <RatePlanTypeForm redirect={false} />;
    }

    if (subStep === "hotel-policy-type") {
      return <PolicyTypeForm redirect={false} />;
    }

    if (subStep === "hotel-policy" && policy.data?.policyType) {
      return (
        <PolicyForm redirect={false} policyTypeData={policy.data.policyType} />
      );
    }

    if (subStep === "hotel-media-category") {
      return <MediaCategoryForm redirect={false} />;
    }

    if (subStep === "hotel-media-asset") {
      return <MediaAssetForm redirect={false} />;
    }
  }

  return null;
}
