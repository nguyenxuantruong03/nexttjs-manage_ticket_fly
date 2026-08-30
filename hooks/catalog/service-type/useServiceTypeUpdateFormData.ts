"use client";

import { useServiceType } from "@/hooks/catalog/service-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useServiceTypeUpdateFormData = (
  serviceTypeId: string,
  enabled = true,
) => {
  const serviceTypeQuery = useServiceType(serviceTypeId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      serviceTypeQuery.data && bookingTypeQuery.data
        ? {
            serviceTypeData: serviceTypeQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: serviceTypeQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: serviceTypeQuery.isFetching || bookingTypeQuery.isFetching,

    isError: serviceTypeQuery.isError || bookingTypeQuery.isError,
    errors: {
      serviceType: serviceTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        serviceTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
