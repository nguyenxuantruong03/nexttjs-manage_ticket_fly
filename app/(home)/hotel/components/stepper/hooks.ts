"use client";

import { useHotelAccessibilityCreateFormData } from "@/hooks/hotel/hotel-accessibility/useHotelAccessibilityCreateFormData";
import { useHotelBathroomTypeCreateFormData } from "@/hooks/hotel/hotel-bathroom-type/useHotelBathroomTypeCreateFormData";
import { useHotelBedTypeCreateFormData } from "@/hooks/hotel/hotel-bed-type/useHotelBedTypeCreateFormData";
import { useHotelBrandCreateFormData } from "@/hooks/hotel/hotel-brand/useHotelBrandCreateFormData";
import { useHotelDiningMealTypeCreateFormData } from "@/hooks/hotel/hotel-dining-meal-type/useHotelDiningMealTypeCreateFormData";
import { useHotelDiningServiceTypeCreateFormData } from "@/hooks/hotel/hotel-dining-service-type/useHotelDiningServiceTypeCreateFormData";
import { useHotelExtraTypeCreateFormData } from "@/hooks/hotel/hotel-extra-type/useHotelExtraTypeCreateFormData";
import { useHotelFacilityCategoryCreateFormData } from "@/hooks/hotel/hotel-facility-category/useHotelFacilityCategoryCreateFormData";
import { useHotelFacilityCreateFormData } from "@/hooks/hotel/hotel-facility/useHotelFacilityCreateFormData";
import { useHotelMealPlanCreateFormData } from "@/hooks/hotel/hotel-meal-plan/useHotelMealPlanCreateFormData";
import { useHotelMediaAssetCreateFormData } from "@/hooks/hotel/hotel-media-asset/useHotelMediaAssetCreateFormData";
import { useHotelMediaCategoryCreateFormData } from "@/hooks/hotel/hotel-media-category/useHotelMediaCategoryCreateFormData";
import { useHotelPolicyCreateFormData } from "@/hooks/hotel/hotel-policy/useHotelPolicyCreateFormData";
import { useHotelPolicyTypeCreateFormData } from "@/hooks/hotel/hotel-policy-type/useHotelPolicyTypeCreateFormData";
import { useHotelRatePlanTypeCreateFormData } from "@/hooks/hotel/hotel-rate-plan-type/useHotelRatePlanTypeCreateFormData";
import { useHotelRoomCategoryCreateFormData } from "@/hooks/hotel/hotel-room-category/useHotelRoomCategoryCreateFormData";
import { useHotelRoomMediaCategoryCreateFormData } from "@/hooks/hotel/hotel-room-media-category/useHotelRoomMediaCategoryCreateFormData";
import { useHotelRoomTypeCreateFormData } from "@/hooks/hotel/hotel-room-type/useHotelRoomTypeCreateFormData";
import { useHotelRoomViewCreateFormData } from "@/hooks/hotel/hotel-room-view/useHotelRoomViewCreateFormData";
import { useHotelStarRatingCreateFormData } from "@/hooks/hotel/hotel-star-rating/useHotelStarRatingCreateFormData";
import { useHotelSustainabilityCreateFormData } from "@/hooks/hotel/hotel-sustainability/useHotelSustainabilityCreateFormData";
import { useHotelTypeCreateFormData } from "@/hooks/hotel/hotel-type/useHotelTypeCreateFormData";

export function useHotelStepperHooks(subStep: string) {
  /**
   * ==========================
   * BASIC
   * ==========================
   */

  const hotelType = useHotelTypeCreateFormData(subStep === "hotel-type");

  const hotelBrand = useHotelBrandCreateFormData(subStep === "hotel-brand");

  const hotelStarRating = useHotelStarRatingCreateFormData(
    subStep === "hotel-star-rating",
  );

  const hotelSustainability = useHotelSustainabilityCreateFormData(
    subStep === "hotel-sustainability",
  );

  /**
   * ==========================
   * ROOM
   * ==========================
   */

  const roomCategory = useHotelRoomCategoryCreateFormData(
    subStep === "hotel-room-category",
  );

  const roomType = useHotelRoomTypeCreateFormData(
    subStep === "hotel-room-type",
  );

  const bedType = useHotelBedTypeCreateFormData(subStep === "hotel-bed-type");

  const bathroomType = useHotelBathroomTypeCreateFormData(
    subStep === "hotel-bathroom-type",
  );

  const roomView = useHotelRoomViewCreateFormData(
    subStep === "hotel-room-view",
  );

  const roomMediaCategory = useHotelRoomMediaCategoryCreateFormData(
    subStep === "hotel-room-media-category",
  );

  /**
   * ==========================
   * FACILITY
   * ==========================
   */

  const facilityCategory = useHotelFacilityCategoryCreateFormData(
    subStep === "hotel-facility-category",
  );

  const facility = useHotelFacilityCreateFormData(subStep === "hotel-facility");

  const accessibility = useHotelAccessibilityCreateFormData(
    subStep === "hotel-accessibility",
  );

  /**
   * ==========================
   * FOOD
   * ==========================
   */

  const mealPlan = useHotelMealPlanCreateFormData(
    subStep === "hotel-meal-plan",
  );

  const diningMealType = useHotelDiningMealTypeCreateFormData(
    subStep === "hotel-dining-meal-type",
  );

  const diningServiceType = useHotelDiningServiceTypeCreateFormData(
    subStep === "hotel-dining-service-type",
  );

  const extraType = useHotelExtraTypeCreateFormData(
    subStep === "hotel-extra-type",
  );

  /**
   * ==========================
   * PRICING & MEDIA
   * ==========================
   */

  const ratePlanType = useHotelRatePlanTypeCreateFormData(
    subStep === "hotel-rate-plan-type",
  );

  const policyType = useHotelPolicyTypeCreateFormData(
    subStep === "hotel-policy-type",
  );

  const policy = useHotelPolicyCreateFormData(subStep === "hotel-policy");

  const mediaCategory = useHotelMediaCategoryCreateFormData(
    subStep === "hotel-media-category",
  );

  const mediaAsset = useHotelMediaAssetCreateFormData(
    subStep === "hotel-media-asset",
  );

  return {
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
  };
}
