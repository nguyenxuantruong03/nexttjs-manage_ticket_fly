"use client";

import { useRouteType } from "@/hooks/catalog/route-type";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useRouteTypeUpdateFormData = (
  routeTypeId: string,
  enabled = true,
) => {
  const routeTypeQuery = useRouteType(routeTypeId, enabled);

  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      routeTypeQuery.data && bookingTypeQuery.data
        ? {
            routeTypeData: routeTypeQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: routeTypeQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: routeTypeQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: routeTypeQuery.isError || bookingTypeQuery.isError,

    errors: {
      routeType: routeTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([routeTypeQuery.refetch(), bookingTypeQuery.refetch()]);
    },
  };
};
