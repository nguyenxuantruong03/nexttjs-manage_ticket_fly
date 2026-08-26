"use client";

import { useQuery } from "@tanstack/react-query";

import { TicketFlyService } from "@/services/product-types/ticket-fly/client";
import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "../../location/useLocationFormData";
import { FlyAirportService } from "@/services/product-types/references/airport/client";
import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { ProviderBookingService } from "@/services/provider-booking/client";
import { ServiceTypeService } from "@/services/catalog/service-type/client";
import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { FlyCabinClassService } from "@/services/product-types/ticket-fly/cabin-class/client";
import { RouteTypeService } from "@/services/catalog/route-type/client";
import { FlyAircraftService } from "@/services/product-types/references/airline/aircraft/client";
import { PriceRuleTypeService } from "@/services/commerce/price-rule-type/client";
import { ExtraService } from "@/services/commerce/extra/client";
import { CurrencyService } from "@/services/location/currency/client";
import { PackageService } from "@/services/commerce/package/client";
import { PolicyService } from "@/services/features/policy/client";
import { PolicyTypeService } from "@/services/features/policy-type/client";

export const useTicketFlyUpdateFormData = (
  ticketFlyId: string,
  enabled = true,
) => {
  const locationQuery = useLocationFormData(
    ["ticket-fly-location-data"],
    enabled && !!ticketFlyId,
  );

  const ticketFlyQuery = useQuery({
    queryKey: ["ticket-fly-update-form-data", ticketFlyId],
    enabled: enabled && !!ticketFlyId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        initialData,
        searchTagData,
        flyAiport,
        extraTypeData,
        providerBookingData,
        serviceTypeData,
        bookingItemTypeData,
        bookingTypeData,
        airlineData,
        routeTypeData,
        aircraftData,
        priceRuleTypeData,
        cabinClassData,
        extraData,
        currencyData,
        packageData,
        policyData,
        policyTypeData,
      ] = await Promise.all([
        TicketFlyService.getOne(ticketFlyId),
        SearchTagService.getMany(),
        FlyAirportService.getMany(),
        ExtraTypeService.getMany(),
        ProviderBookingService.getMany(),
        ServiceTypeService.getMany(),
        BookingItemTypeService.getMany(),
        BookingTypeService.getMany(),
        FlyAirlineService.getMany(),
        RouteTypeService.getMany(),
        FlyAircraftService.getMany(),
        PriceRuleTypeService.getMany(),
        FlyCabinClassService.getMany(),
        ExtraService.getMany(),
        CurrencyService.getMany(),
        PackageService.getMany(),
        PolicyService.getMany(),
        PolicyTypeService.getMany(),
      ]);

      return {
        initialData,
        searchTagData,
        flyAiport,
        extraTypeData,
        providerBookingData,
        serviceTypeData,
        bookingItemTypeData,
        bookingTypeData,
        airlineData,
        routeTypeData,
        aircraftData,
        priceRuleTypeData,
        cabinClassData,
        extraData,
        currencyData,
        packageData,
        policyData,
        policyTypeData,
      };
    },
  });

  return {
    data:
      locationQuery.data && ticketFlyQuery.data
        ? {
            ...ticketFlyQuery.data,
            ...locationQuery.data,
          }
        : undefined,

    isPending: locationQuery.isPending || ticketFlyQuery.isPending,
    isLoading: locationQuery.isLoading || ticketFlyQuery.isLoading,
    isFetching: locationQuery.isFetching || ticketFlyQuery.isFetching,
    isError: locationQuery.isError || ticketFlyQuery.isError,
    error: locationQuery.error ?? ticketFlyQuery.error,

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), ticketFlyQuery.refetch()]);
    },
  };
};
