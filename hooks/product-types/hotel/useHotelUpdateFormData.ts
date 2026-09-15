"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelService } from "@/services/product-types/hotel/client";

import { SearchTagService } from "@/services/search/tag/client";
import { ProviderBookingService } from "@/services/provider-booking/client";

import { HotelRoomCategoryService } from "@/services/product-types/hotel/hotel-room-category/client";
import { HotelBathroomTypeService } from "@/services/product-types/hotel/hotel-bathroom-type/client";
import { HotelRoomViewService } from "@/services/product-types/hotel/hotel-room-view/client";
import { HotelBedTypeService } from "@/services/product-types/hotel/hotel-bed-type/client";
import { HotelRoomTypeService } from "@/services/product-types/hotel/hotel-room-type/client";
import { HotelRatePlanTypeService } from "@/services/product-types/hotel/hotel-rate-plan-type/client";
import { HotelBrandService } from "@/services/product-types/hotel/hotel-brand/client";
import { HotelStarRatingService } from "@/services/product-types/hotel/hotel-star-rating/client";

import { useLocationFormData } from "../../location/useLocationFormData";

import { HotelDiningMealTypeService } from "@/services/product-types/hotel/hotel-dining-meal-type/client";
import { HotelDiningServiceTypeService } from "@/services/product-types/hotel/hotel-dining-service-type/client";
import { HotelMealPlanService } from "@/services/product-types/hotel/hotel-meal-plan/client";
import { HotelSustainabilityService } from "@/services/product-types/hotel/hotel-sustainability/client";
import { HotelAccessibilityService } from "@/services/product-types/hotel/hotel-accessibility/client";
import { HotelCheckInPolicyService } from "@/services/product-types/hotel/hotel-check-in-policy/client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { FacilityService } from "@/services/features/facility/client";
import { FacilityCategoryService } from "@/services/features/facility-category/client";
import { PackageService } from "@/services/commerce/package/client";
import { PolicyService } from "@/services/features/policy/client";
import { PriceRuleTypeService } from "@/services/commerce/price-rule-type/client";
import { PolicyTypeService } from "@/services/features/policy-type/client";
import { CurrencyService } from "@/services/location/currency/client";
import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { ExtraService } from "@/services/commerce/extra/client";
import { ServiceTypeService } from "@/services/catalog/service-type/client";
import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";
import { MediaAssetService } from "@/services/catalog/media-asset/client";
import { MediaCategoryService } from "@/services/catalog/media-category/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useHotelUpdateFormData = (hotelId: string, enabled = true) => {
  const locationQuery = useLocationFormData(
    ["hotel-location-data"],
    enabled && Boolean(hotelId),
  );

  const hotelQuery = useQuery({
    queryKey: ["hotel-update-form-data", hotelId],
    enabled: enabled && Boolean(hotelId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [
        initialData,
        searchTagData,
        providerBooking,
        roomCategoryData,
        bathroomTypeData,
        hotelRoomViewData,
        bedTypeData,
        roomTypeData,
        checkInPolicyData,
        diningMealTypeData,
        diningServiceData,
        ratePlanTypeData,
        mealPlanData,
        sustainabilityData,
        accessibilityData,
        brandData,
        starRatingData,
        bookingTypeData,
        facilityData,
        facilityCategoryData,
        packageData,
        priceRuleTypeData,
        policyData,
        policyTypeData,
        currencyData,
        extraTypeData,
        extraData,
        serviceTypeData,
        bookingItemTypeData,
        mediaAssetData,
        mediaCategoryData,
      ] = await Promise.all([
        HotelService.getOne(hotelId),
        SearchTagService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        ProviderBookingService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelRoomCategoryService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelBathroomTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelRoomViewService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelBedTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelRoomTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelCheckInPolicyService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelDiningMealTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelDiningServiceTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelRatePlanTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelMealPlanService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelSustainabilityService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelAccessibilityService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelBrandService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelStarRatingService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        BookingTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FacilityService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FacilityCategoryService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        PackageService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        PriceRuleTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        PolicyService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        PolicyTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        CurrencyService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        ExtraTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        ExtraService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        ServiceTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        BookingItemTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        MediaAssetService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        MediaCategoryService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
      ]);

      return {
        initialData,
        searchTagData,
        providerBooking,
        roomCategoryData,
        bathroomTypeData,
        hotelRoomViewData,
        bedTypeData,
        roomTypeData,
        checkInPolicyData,
        diningMealTypeData,
        diningServiceData,
        ratePlanTypeData,
        mealPlanData,
        sustainabilityData,
        accessibilityData,
        brandData,
        starRatingData,
        bookingTypeData,
        facilityData,
        facilityCategoryData,
        packageData,
        priceRuleTypeData,
        policyData,
        policyTypeData,
        currencyData,
        extraTypeData,
        extraData,
        serviceTypeData,
        bookingItemTypeData,
        mediaAssetData,
        mediaCategoryData,
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

    isLoading: locationQuery.isLoading || hotelQuery.isLoading,

    isFetching: locationQuery.isFetching || hotelQuery.isFetching,

    isError: locationQuery.isError || hotelQuery.isError,

    errors: {
      location: locationQuery.error as Error | null,
      hotel: hotelQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), hotelQuery.refetch()]);
    },
  };
};
