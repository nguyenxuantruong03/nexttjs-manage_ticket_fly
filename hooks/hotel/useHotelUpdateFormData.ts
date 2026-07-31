"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelService } from "@/services/hotel/client";
import { SearchTagService } from "@/services/search/tag/client";
import { ProviderBookingService } from "@/services/provider-booking/client";

import { HotelTypeService } from "@/services/hotel/hotel-type/client";
import { HotelMediaCategoryService } from "@/services/hotel/hotel-media-category/client";
import { HotelRoomCategoryService } from "@/services/hotel/hotel-room-category/client";
import { HotelBathroomTypeService } from "@/services/hotel/hotel-bathroom-type/client";
import { HotelRoomViewService } from "@/services/hotel/hotel-room-view/client";
import { HotelBedTypeService } from "@/services/hotel/hotel-bed-type/client";
import { HotelFacilityService } from "@/services/hotel/hotel-facility/client";
import { HotelFacilityCategoryService } from "@/services/hotel/hotel-facility-category/client";
import { HotelRoomTypeService } from "@/services/hotel/hotel-room-type/client";
import { HotelRatePlanTypeService } from "@/services/hotel/hotel-rate-plan-type/client";
import { HotelPolicyService } from "@/services/hotel/hotel-policy/client";
import { HotelPolicyTypeService } from "@/services/hotel/hotel-policy-type/client";
import { HotelBrandService } from "@/services/hotel/hotel-brand/client";
import { HotelStarRatingService } from "@/services/hotel/hotel-star-rating/client";

import { useLocationFormData } from "../location/useLocationFormData";
import { HotelMediaAssetService } from "@/services/hotel/hotel-media-asset/client";
import { HotelDiningMealTypeService } from "@/services/hotel/hotel-dining-meal-type/client";
import { HotelDiningServiceTypeService } from "@/services/hotel/hotel-dining-service-type/client";
import { HotelExtraTypeService } from "@/services/hotel/hotel-extra-type/client";
import { HotelMealPlanService } from "@/services/hotel/hotel-meal-plan/client";
import { HotelSustainabilityService } from "@/services/hotel/hotel-sustainability/client";
import { HotelAccessibilityService } from "@/services/hotel/hotel-accessibility/client";

export const useHotelUpdateFormData = (hotelId: string, enabled = true) => {
  const locationQuery = useLocationFormData(
    ["hotel-location-data"],
    enabled && !!hotelId,
  );

  const hotelQuery = useQuery({
    queryKey: ["hotel-update-form-data", hotelId],
    enabled: enabled && !!hotelId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        initialData,
        searchTagData,
        providerBooking,

        hotelTypeData,
        mediaCategoryData,
        roomCategoryData,
        bathroomTypeData,
        hotelRoomViewData,
        bedTypeData,
        hotelFacilityData,
        facilityCategoryData,
        mediaAssestData,
        roomTypeData,
        diningMealTypeData,
        diningServiceData,
        extraTypeData,
        ratePlanTypeData,
        mealPlanData,
        policyData,
        policyTypeData,
        sustainabilityData,
        accessibilityData,
        brandData,
        starRatingData,
      ] = await Promise.all([
        HotelService.getOne(hotelId),
        SearchTagService.getMany(),
        ProviderBookingService.getMany(),

        HotelTypeService.getMany(),
        HotelMediaCategoryService.getMany(),
        HotelRoomCategoryService.getMany(),
        HotelBathroomTypeService.getMany(),
        HotelRoomViewService.getMany(),
        HotelBedTypeService.getMany(),
        HotelFacilityService.getMany(),
        HotelFacilityCategoryService.getMany(),
        HotelMediaAssetService.getMany(),
        HotelRoomTypeService.getMany(),
        HotelDiningMealTypeService.getMany(),
        HotelDiningServiceTypeService.getMany(),
        HotelExtraTypeService.getMany(),
        HotelRatePlanTypeService.getMany(),
        HotelMealPlanService.getMany(),
        HotelPolicyService.getMany(),
        HotelPolicyTypeService.getMany(),
        HotelSustainabilityService.getMany(),
        HotelAccessibilityService.getMany(),
        HotelBrandService.getMany(),
        HotelStarRatingService.getMany(),
      ]);

      return {
        initialData,
        searchTagData,
        providerBooking,

        hotelTypeData,
        mediaCategoryData,
        roomCategoryData,
        bathroomTypeData,
        hotelRoomViewData,
        bedTypeData,
        hotelFacilityData,
        facilityCategoryData,
        mediaAssestData,
        roomTypeData,
        diningMealTypeData,
        diningServiceData,
        extraTypeData,
        ratePlanTypeData,
        mealPlanData,
        policyData,
        policyTypeData,
        sustainabilityData,
        accessibilityData,
        brandData,
        starRatingData,
      };
    },
  });

  return {
    data:
      locationQuery.data && hotelQuery.data
        ? {
            ...hotelQuery.data,
            ...locationQuery.data,
          }
        : undefined,

    isPending: locationQuery.isPending || hotelQuery.isPending,
    isLoading: locationQuery.isLoading || hotelQuery.isLoading,
    isFetching: locationQuery.isFetching || hotelQuery.isFetching,
    isError: locationQuery.isError || hotelQuery.isError,
    error: locationQuery.error ?? hotelQuery.error,

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), hotelQuery.refetch()]);
    },
  };
};
