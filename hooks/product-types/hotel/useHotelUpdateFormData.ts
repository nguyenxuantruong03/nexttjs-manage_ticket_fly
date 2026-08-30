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
      ] = await Promise.all([
        HotelService.getOne(hotelId),
        SearchTagService.getMany(),
        ProviderBookingService.getMany(),

        HotelRoomCategoryService.getMany(),
        HotelBathroomTypeService.getMany(),
        HotelRoomViewService.getMany(),
        HotelBedTypeService.getMany(),
        HotelRoomTypeService.getMany(),
        HotelCheckInPolicyService.getMany(),
        HotelDiningMealTypeService.getMany(),
        HotelDiningServiceTypeService.getMany(),
        HotelRatePlanTypeService.getMany(),
        HotelMealPlanService.getMany(),
        HotelSustainabilityService.getMany(),
        HotelAccessibilityService.getMany(),
        HotelBrandService.getMany(),
        HotelStarRatingService.getMany(),
        BookingTypeService.getMany(),
        FacilityService.getMany(),
        FacilityCategoryService.getMany(),
        PackageService.getMany(),
        PriceRuleTypeService.getMany(),
        PolicyService.getMany(),
        PolicyTypeService.getMany(),
        CurrencyService.getMany(),
        ExtraTypeService.getMany(),
        ExtraService.getMany(),
        ServiceTypeService.getMany(),
        BookingItemTypeService.getMany(),
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
    // 2 nguồn dữ liệu độc lập (location, hotel — hotel gồm cả
    // initialData) nên tách riêng để biết lỗi đến từ nguồn nào.
    errors: {
      location: locationQuery.error as Error | null,
      hotel: hotelQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), hotelQuery.refetch()]);
    },
  };
};
