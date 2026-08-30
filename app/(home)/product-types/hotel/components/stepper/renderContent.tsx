"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  AccessibilityForm,
  BathroomTypeForm,
  BedTypeForm,
  BrandForm,
  DiningMealTypeForm,
  MealPlanForm,
  DiningServiceTypeForm,
  RatePlanTypeForm,
  RoomCategoryForm,
  RoomTypeForm,
  RoomViewForm,
  StarRatingForm,
  SustainabilityForm,
} from "./forms";
import HotelCheckInPolicyForm from "../../check-in-policy/components/CheckInPolicyForm";

interface Props {
  mainStep: string;
  subStep: string;

  hooks: ReturnType<typeof import("./hooks").useHotelStepperHooks>;
}

export function renderHotelStepperContent({ mainStep, subStep, hooks }: Props) {
  const {
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
  } = hooks;

  /**
   * ==========================
   * BASIC
   * ==========================
   */

  if (mainStep === "basic") {
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

    if (roomCategory.isError || roomType.isError) {
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

    if (subStep === "hotel-check-in-policy") {
      return (
        <HotelCheckInPolicyForm
          redirect={false}
          hotelData={checkInPolicy.data?.hotels ?? []}
        />
      );
    }
  }

  /**
   * ==========================
   * FACILITY
   * ==========================
   */

  if (mainStep === "facility") {
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
    if (mealPlan.isLoading || diningServiceType.isLoading) {
      return <LoadingPage />;
    }

    if (mealPlan.isError || diningServiceType.isError) {
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
  }

  /**
   * ==========================
   * PRICING & MEDIA
   * ==========================
   */

  if (mainStep === "pricing") {
    if (subStep === "hotel-rate-plan-type") {
      return <RatePlanTypeForm redirect={false} />;
    }
  }

  return null;
}
