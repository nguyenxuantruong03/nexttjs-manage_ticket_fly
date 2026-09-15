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
import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { PriceRuleTypeService } from "@/services/commerce/price-rule-type/client";
import { CarRentalInsuranceBenefitTypeService } from "@/services/product-types/car-rental/insurance-benefit-type/client";
import { CarRentalInsuranceTypeService } from "@/services/product-types/car-rental/insurance-type/client";
import { ProviderBookingService } from "@/services/provider-booking/client";
import { ServiceTypeService } from "@/services/catalog/service-type/client";
import { ExtraService } from "@/services/commerce/extra/client";
import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";
import { PackageService } from "@/services/commerce/package/client";
import { PolicyService } from "@/services/features/policy/client";
import { CurrencyService } from "@/services/location/currency/client";
import { PolicyTypeService } from "@/services/features/policy-type/client";
import { CarRentalDocumentTypeService } from "@/services/product-types/car-rental/document-type/client";
import { FacilityService } from "@/services/features/facility/client";
import { FacilityCategoryService } from "@/services/features/facility-category/client";
import { MediaAssetService } from "@/services/catalog/media-asset/client";
import { MediaCategoryService } from "@/services/catalog/media-category/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useCarrentalCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["carrental-create-form-data"],

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
        priceRuleTypeData,
        insuranceBenefitTypeData,
        insuranceTypeData,
        extraTypeData,
        providerBookingData,
        serviceTypeData,
        extraData,
        bookingItemTypeData,
        packageData,
        currencyData,
        policyData,
        policyTypeData,
        documentTypeData,
        facilityData,
        facilityCategoryData,
        mediaAssetData,
        mediaCategoryData,
      ] = await Promise.all([
        SearchTagService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        AddressService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        CountryService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        CityService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        DistrictService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        WardService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        VehicleTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        BookingTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        PriceRuleTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        CarRentalInsuranceBenefitTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        CarRentalInsuranceTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        ExtraTypeService.getMany({
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
        ExtraService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        BookingItemTypeService.getMany({
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
        CarRentalDocumentTypeService.getMany({
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
        searchTagData,
        addresses,
        countries,
        cities,
        districts,
        wards,
        vehicleTypeData,
        bookingTypeData,
        priceRuleTypeData,
        insuranceBenefitTypeData,
        insuranceTypeData,
        extraTypeData,
        providerBookingData,
        serviceTypeData,
        extraData,
        bookingItemTypeData,
        packageData,
        currencyData,
        policyData,
        policyTypeData,
        documentTypeData,
        facilityData,
        facilityCategoryData,
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
      carRental: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
