"use client";

import { useQuery } from "@tanstack/react-query";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

import { useLocationFormData } from "../../location/useLocationFormData";

import { SearchTagService } from "@/services/search/tag/client";
import { FlyAirportService } from "@/services/product-types/references/airport/client";
import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { FlyAircraftService } from "@/services/product-types/references/airline/aircraft/client";
import { FlyCabinClassService } from "@/services/product-types/ticket-fly/cabin-class/client";
import { TicketFlyService } from "@/services/product-types/ticket-fly/client";

import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { ExtraService } from "@/services/commerce/extra/client";
import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { CurrencyService } from "@/services/location/currency/client";
import { PackageService } from "@/services/commerce/package/client";
import { PriceRuleTypeService } from "@/services/commerce/price-rule-type/client";

import { ProviderBookingService } from "@/services/provider-booking/client";

import { ServiceTypeService } from "@/services/catalog/service-type/client";
import { RouteTypeService } from "@/services/catalog/route-type/client";
import { MediaAssetService } from "@/services/catalog/media-asset/client";
import { MediaCategoryService } from "@/services/catalog/media-category/client";

import { PolicyService } from "@/services/features/policy/client";
import { PolicyTypeService } from "@/services/features/policy-type/client";

export const useTicketFlyUpdateFormData = (
  ticketFlyId: string,
  enabled = true,
) => {
  const locationQuery = useLocationFormData(
    ["ticket-fly-location-data"],
    enabled && Boolean(ticketFlyId),
  );

  const ticketFlyQuery = useQuery({
    queryKey: ["ticket-fly-update-form-data", ticketFlyId],
    enabled: enabled && Boolean(ticketFlyId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

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
        mediaAssetData,
        mediaCategoryData,
      ] = await Promise.all([
        TicketFlyService.getOne(ticketFlyId),
        SearchTagService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FlyAirportService.getMany({
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
        BookingItemTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        BookingTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FlyAirlineService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        RouteTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FlyAircraftService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        PriceRuleTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FlyCabinClassService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        ExtraService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        CurrencyService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        PackageService.getMany({
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
        mediaAssetData,
        mediaCategoryData,
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

    isLoading: locationQuery.isLoading || ticketFlyQuery.isLoading,

    isFetching: locationQuery.isFetching || ticketFlyQuery.isFetching,

    isError: locationQuery.isError || ticketFlyQuery.isError,

    errors: {
      ticketFly: ticketFlyQuery.error as Error | null,
      location: locationQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), ticketFlyQuery.refetch()]);
    },
  };
};
