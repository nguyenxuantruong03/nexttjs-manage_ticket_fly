"use client";

import { useQuery } from "@tanstack/react-query";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

import { useLocationFormData } from "../../location/useLocationFormData";

import { YachtService } from "@/services/product-types/yacht/client";

import { SearchTagService } from "@/services/search/tag/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { ExtraFeeTypeService } from "@/services/commerce/extra-fee-type/client";
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

export const useYachtUpdateFormData = (yachtId: string, enabled = true) => {
  const locationQuery = useLocationFormData(
    ["yacht-location-data"],
    enabled && Boolean(yachtId),
  );

  const yachtQuery = useQuery({
    queryKey: ["yacht-update-form-data", yachtId],
    enabled: enabled && Boolean(yachtId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [
        initialData,
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
        YachtService.getOne(yachtId),
        SearchTagService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        BookingTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FuelTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        YachtConditionService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        ExtraFeeTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        YachtCrewRoleService.getMany({
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
        ProviderBookingService.getMany({
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
        RouteTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        PackageService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        CurrencyService.getMany({
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
        ExtraService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        ExtraTypeService.getMany({
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
      await Promise.all([locationQuery.refetch(), yachtQuery.refetch()]);
    },
  };
};
