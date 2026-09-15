"use client";

import { useServiceType } from "@/hooks/catalog/service-type";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useServiceTypeUpdateFormData = (
  serviceTypeId: string,
  enabled = true,
) => {
  const serviceTypeQuery = useServiceType(serviceTypeId, enabled);

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
      serviceTypeQuery.data && bookingTypeQuery.data
        ? {
            serviceTypeData: serviceTypeQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: serviceTypeQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: serviceTypeQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: serviceTypeQuery.isError || bookingTypeQuery.isError,

    errors: {
      serviceType: serviceTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        serviceTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
