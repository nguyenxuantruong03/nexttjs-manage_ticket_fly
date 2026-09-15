"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";
import { AddressService } from "@/services/location/address/client";
import { CountryService } from "@/services/location/country/client";
import { CityService } from "@/services/location/city/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";
import { VehicleTypeService } from "@/services/catalog/vehicle-type/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { FuelTypeService } from "@/services/catalog/fuel-type/client";
import { ServiceTypeService } from "@/services/catalog/service-type/client";
import { RouteTypeService } from "@/services/catalog/route-type/client";
import { ExtraFeeTypeService } from "@/services/commerce/extra-fee-type/client";
import { PriceRuleTypeService } from "@/services/commerce/price-rule-type/client";
import { ProviderBookingService } from "@/services/provider-booking/client";
import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";
import { ExtraService } from "@/services/commerce/extra/client";
import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { CurrencyService } from "@/services/location/currency/client";
import { PackageService } from "@/services/commerce/package/client";
import { PolicyService } from "@/services/features/policy/client";
import { PolicyTypeService } from "@/services/features/policy-type/client";
import { LanguageService } from "@/services/location/language/client";
import { MediaAssetService } from "@/services/catalog/media-asset/client";
import { MediaCategoryService } from "@/services/catalog/media-category/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

// ======================================================
// Create Form Data
// ======================================================

export const useAirportTransferCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["airport-transfer-create-form-data"],

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [
        searchTagData,
        addresses,
        countries,
        cities,
        districts,
        wards,
        vehicleTypeData,
        bookingTypeData,
        fuelTypeData,
        serviceTypeData,
        routeTypeData,
        extraFeeTypeData,
        priceRuleTypeData,
        providerBookingData,
        bookingItemTypeData,
        extraData,
        extraTypeData,
        currencyData,
        packageData,
        policyData,
        policyTypeData,
        languageData,
        mediaAssetData,
        mediaCategoryData,
      ] = await Promise.all([
        SearchTagService.getMany(),
        AddressService.getMany(),
        CountryService.getMany(),
        CityService.getMany(),
        DistrictService.getMany(),
        WardService.getMany(),
        VehicleTypeService.getMany(),
        BookingTypeService.getMany(),
        FuelTypeService.getMany(),
        ServiceTypeService.getMany(),
        RouteTypeService.getMany(),
        ExtraFeeTypeService.getMany(),
        PriceRuleTypeService.getMany(),
        ProviderBookingService.getMany(),
        BookingItemTypeService.getMany(),
        ExtraService.getMany(),
        ExtraTypeService.getMany(),
        CurrencyService.getMany(),
        PackageService.getMany(),
        PolicyService.getMany(),
        PolicyTypeService.getMany(),
        LanguageService.getMany(),
        MediaAssetService.getMany(),
        MediaCategoryService.getMany(),
      ]);

      return {
        searchTagData,
        addresses,
        countries,
        cities,
        districts,
        wards,
        vehicleTypeData,
        bookingTypeData,
        fuelTypeData,
        serviceTypeData,
        routeTypeData,
        extraFeeTypeData,
        priceRuleTypeData,
        providerBookingData,
        bookingItemTypeData,
        extraData,
        extraTypeData,
        currencyData,
        packageData,
        policyData,
        policyTypeData,
        languageData,
        mediaAssetData,
        mediaCategoryData,
      };
    },
  });

  return {
    data: query.data,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    errors: {
      airportTransfer: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
