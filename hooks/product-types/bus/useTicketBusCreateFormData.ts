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
import { BusSeatTypeService } from "@/services/product-types/ticket-bus/seat-type/client";
import { CurrencyService } from "@/services/location/currency/client";
import { PackageService } from "@/services/commerce/package/client";
import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { ExtraService } from "@/services/commerce/extra/client";
import { PolicyTypeService } from "@/services/features/policy-type/client";
import { PolicyService } from "@/services/features/policy/client";
import { PriceRuleTypeService } from "@/services/commerce/price-rule-type/client";
import { ExtraFeeTypeService } from "@/services/commerce/extra-fee-type/client";
import { FacilityCategoryService } from "@/services/features/facility-category/client";
import { FacilityService } from "@/services/features/facility/client";
import { ProviderBookingService } from "@/services/provider-booking/client";
import { FuelTypeService } from "@/services/catalog/fuel-type/client";
import { RouteTypeService } from "@/services/catalog/route-type/client";
import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";
import { ServiceTypeService } from "@/services/catalog/service-type/client";

export const useTicketBusCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["ticket-bus-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,

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
        seatTypeData,
        currencyData,
        packageData,
        extraTypeData,
        extraData,
        policyTypeData,
        policyData,
        extraFeeTypeData,
        priceRuleTypeData,
        facilityCategoryData,
        facilityData,
        fuelTypeData,
        routeTypeData,
        providerBookingData,
        bookingItemTypeData,
        serviceTypeData,
      ] = await Promise.all([
        SearchTagService.getMany(),
        AddressService.getMany(),
        CountryService.getMany(),
        CityService.getMany(),
        DistrictService.getMany(),
        WardService.getMany(),
        VehicleTypeService.getMany(),
        BookingTypeService.getMany(),
        BusSeatTypeService.getMany(),
        CurrencyService.getMany(),
        PackageService.getMany(),
        ExtraTypeService.getMany(),
        ExtraService.getMany(),
        PolicyTypeService.getMany(),
        PolicyService.getMany(),
        ExtraFeeTypeService.getMany(),
        PriceRuleTypeService.getMany(),
        FacilityCategoryService.getMany(),
        FacilityService.getMany(),
        FuelTypeService.getMany(),
        RouteTypeService.getMany(),
        ProviderBookingService.getMany(),
        BookingItemTypeService.getMany(),
        ServiceTypeService.getMany(),
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
        seatTypeData,
        currencyData,
        packageData,
        extraTypeData,
        extraData,
        policyTypeData,
        policyData,
        extraFeeTypeData,
        priceRuleTypeData,
        facilityCategoryData,
        facilityData,
        fuelTypeData,
        routeTypeData,
        providerBookingData,
        bookingItemTypeData,
        serviceTypeData,
      };
    },
  });

  return {
    data: query.data,

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    // isError là field bool duy nhất dùng để check "có lỗi hay không"
    // ở component (if (isError || !data) ...). "errors" bên dưới chỉ
    // dùng khi cần hiển thị message/nguồn lỗi cụ thể, không thay thế
    // isError.
    isError: query.isError,
    // Chỉ có 1 nguồn dữ liệu (Promise.all gộp chung) nên chỉ có 1 key.
    errors: {
      ticketBus: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
