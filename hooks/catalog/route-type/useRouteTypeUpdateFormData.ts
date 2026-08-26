"use client";

import { RouteTypeService } from "@/services/catalog/route-type/client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { useQuery } from "@tanstack/react-query";

export const useRouteTypeUpdateFormData = (
  routeTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["route-type-update", routeTypeId],

    enabled: enabled && !!routeTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [routeTypeData, bookingTypes] = await Promise.all([
        RouteTypeService.getOne(routeTypeId),
        BookingTypeService.getMany(),
      ]);

      return {
        routeTypeData,
        bookingTypes,
      };
    },
  });
};
