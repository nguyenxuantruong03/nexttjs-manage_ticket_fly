"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { ExtraFeeTypeService } from "@/services/commerce/extra-fee-type/client";

import { useLocationFormData } from "../../location/useLocationFormData";

import { FuelTypeService } from "@/services/catalog/fuel-type/client";

import { YachtConditionService } from "@/services/product-types/yacht/condition/client";

import { YachtCrewRoleService } from "@/services/product-types/yacht/crew-role/client";

import { FacilityService } from "@/services/features/facility/client";

import { FacilityCategoryService } from "@/services/features/facility-category/client";

import { ProviderBookingService } from "@/services/provider-booking/client";

import { ServiceTypeService } from "@/services/catalog/service-type/client";

import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";

import { RouteTypeService } from "@/services/catalog/route-type/client";

import { PackageService } from "@/services/commerce/package/client";

import { CurrencyService } from "@/services/location/currency/client";

import { PolicyService } from "@/services/features/policy/client";

import { PolicyTypeService } from "@/services/features/policy-type/client";

import { ExtraService } from "@/services/commerce/extra/client";

import { ExtraTypeService } from "@/services/commerce/extra-type/client";

import { MediaAssetService } from "@/services/catalog/media-asset/client";

import { MediaCategoryService } from "@/services/catalog/media-category/client";

export const useYachtCreateFormData = (enabled = true) => {
  const locationQuery = useLocationFormData(["yacht-location-data"], enabled);

  const yachtQuery = useQuery({
    queryKey: ["yacht-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [
        searchTagData,
        bookingTypeData,
        fuelTypeData,
        conditionData,
        extraFeeTypeData,
        crewRoleData,
        facilityData,
        facilityCategoryData,
        providerBookingData,
        serviceTypeData,
        bookingItemTypeData,
        routeTypeData,
        packageData,
        currencyData,
        policyData,
        policyTypeData,
        extraData,
        extraTypeData,
        mediaAssetData,
        mediaCategoryData,
      ] = await Promise.all([
        SearchTagService.getMany(),
        BookingTypeService.getMany(),
        FuelTypeService.getMany(),
        YachtConditionService.getMany(),
        ExtraFeeTypeService.getMany(),
        YachtCrewRoleService.getMany(),
        FacilityService.getMany(),
        FacilityCategoryService.getMany(),
        ProviderBookingService.getMany(),
        ServiceTypeService.getMany(),
        BookingItemTypeService.getMany(),
        RouteTypeService.getMany(),
        PackageService.getMany(),
        CurrencyService.getMany(),
        PolicyService.getMany(),
        PolicyTypeService.getMany(),
        ExtraService.getMany(),
        ExtraTypeService.getMany(),
        MediaAssetService.getMany(),
        MediaCategoryService.getMany(),
      ]);

      return {
        searchTagData,
        bookingTypeData,
        fuelTypeData,
        conditionData,
        extraFeeTypeData,
        crewRoleData,
        facilityData,
        facilityCategoryData,
        providerBookingData,
        serviceTypeData,
        bookingItemTypeData,
        routeTypeData,
        packageData,
        currencyData,
        policyData,
        policyTypeData,
        extraData,
        extraTypeData,
        mediaAssetData,
        mediaCategoryData,
      };
    },
  });

  return {
    data:
      locationQuery.data && yachtQuery.data
        ? {
            ...yachtQuery.data,
            ...locationQuery.data,
          }
        : undefined,

    isLoading: locationQuery.isLoading || yachtQuery.isLoading,

    isFetching: locationQuery.isFetching || yachtQuery.isFetching,

    isError: locationQuery.isError || yachtQuery.isError,

    errors: {
      yacht: yachtQuery.error as Error | null,
      location: locationQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        locationQuery.refetch(),
        yachtQuery.refetch(),
      ]);
    },
  };
};