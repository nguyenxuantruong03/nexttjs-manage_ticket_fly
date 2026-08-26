"use client";

import { useHotelAccessibilityCreateFormData } from "@/hooks/product-types/hotel/hotel-accessibility/useHotelAccessibilityCreateFormData";
import { useHotelBathroomTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-bathroom-type/useHotelBathroomTypeCreateFormData";
import { useHotelBedTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-bed-type/useHotelBedTypeCreateFormData";
import { useHotelBrandCreateFormData } from "@/hooks/product-types/hotel/hotel-brand/useHotelBrandCreateFormData";
import { useHotelCheckInPolicyCreateFormData } from "@/hooks/product-types/hotel/hotel-check-in-policy/useHotelCheckInPolicyCreateFormData";
import { useHotelDiningMealTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-dining-meal-type/useHotelDiningMealTypeCreateFormData";
import { useHotelMealPlanCreateFormData } from "@/hooks/product-types/hotel/hotel-meal-plan/useHotelMealPlanCreateFormData";
import { useHotelRatePlanTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-rate-plan-type/useHotelRatePlanTypeCreateFormData";
import { useHotelRoomCategoryCreateFormData } from "@/hooks/product-types/hotel/hotel-room-category/useHotelRoomCategoryCreateFormData";
import { useHotelRoomTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-room-type/useHotelRoomTypeCreateFormData";
import { useHotelRoomViewCreateFormData } from "@/hooks/product-types/hotel/hotel-room-view/useHotelRoomViewCreateFormData";
import { useHotelStarRatingCreateFormData } from "@/hooks/product-types/hotel/hotel-star-rating/useHotelStarRatingCreateFormData";
import { useHotelSustainabilityCreateFormData } from "@/hooks/product-types/hotel/hotel-sustainability/useHotelSustainabilityCreateFormData";
import { useHotelDiningServiceTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-dining-service-type/useHotelDiningServiceTypeCreateFormData";

export function useHotelStepperHooks(subStep: string) {
  /**
   * ==========================
   * BASIC
   * ==========================
   */

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

  const checkInPolicy = useHotelCheckInPolicyCreateFormData(
    subStep === "hotel-check-in-policy",
  );

  /**
   * ==========================
   * FACILITY
   * ==========================
   */

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

  /**
   * ==========================
   * PRICING & MEDIA
   * ==========================
   */

  const ratePlanType = useHotelRatePlanTypeCreateFormData(
    subStep === "hotel-rate-plan-type",
  );

  return {
    hotelBrand,
    hotelStarRating,
    hotelSustainability,

    roomCategory,
    roomType,
    bedType,
    bathroomType,
    roomView,
    checkInPolicy,

    accessibility,

    mealPlan,
    diningMealType,
    diningServiceType,

    ratePlanType,
  };
}
