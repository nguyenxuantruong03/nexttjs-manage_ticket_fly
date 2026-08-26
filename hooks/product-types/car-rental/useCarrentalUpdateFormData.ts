"use client";

import { useQuery } from "@tanstack/react-query";

import { CarRentalService } from "@/services/product-types/car-rental/client";
import { SearchTagService } from "@/services/search/tag/client";
import { AddressService } from "@/services/location/address/client";
import { CountryService } from "@/services/location/country/client";
import { CityService } from "@/services/location/city/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { VehicleTypeService } from "@/services/catalog/vehicle-type/client";
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

export const useCarrentalUpdateFormData = (
  carrentalId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["carrental-update-form-data", carrentalId],
    enabled: enabled && !!carrentalId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        initialData,
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
      ] = await Promise.all([
        CarRentalService.getOne(carrentalId),
        SearchTagService.getMany(),
        AddressService.getMany(),
        CountryService.getMany(),
        CityService.getMany(),
        DistrictService.getMany(),
        WardService.getMany(),
        VehicleTypeService.getMany(),
        BookingTypeService.getMany(),
        PriceRuleTypeService.getMany(),
        CarRentalInsuranceBenefitTypeService.getMany(),
        CarRentalInsuranceTypeService.getMany(),
        ExtraTypeService.getMany(),
        ProviderBookingService.getMany(),
        ServiceTypeService.getMany(),
        ExtraService.getMany(),
        BookingItemTypeService.getMany(),
        PackageService.getMany(),
        CurrencyService.getMany(),
        PolicyService.getMany(),
        PolicyTypeService.getMany(),
        CarRentalDocumentTypeService.getMany(),
        FacilityService.getMany(),
        FacilityCategoryService.getMany()
      ]);

      return {
        initialData,
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
      };
    },
  });
};
