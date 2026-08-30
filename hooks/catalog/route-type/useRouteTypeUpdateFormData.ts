"use client";

import { useRouteType } from "@/hooks/catalog/route-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useRouteTypeUpdateFormData = (
  routeTypeId: string,
  enabled = true,
) => {
  const routeTypeQuery = useRouteType(routeTypeId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      routeTypeQuery.data && bookingTypeQuery.data
        ? {
            routeTypeData: routeTypeQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: routeTypeQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: routeTypeQuery.isFetching || bookingTypeQuery.isFetching,

    isError: routeTypeQuery.isError || bookingTypeQuery.isError,
    errors: {
      routeType: routeTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([routeTypeQuery.refetch(), bookingTypeQuery.refetch()]);
    },
  };
};
