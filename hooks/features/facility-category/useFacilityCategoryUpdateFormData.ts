"use client";

import { useFacilityCategory } from "@/hooks/features/facility-category";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useFacilityCategoryUpdateFormData = (
  facilityCategoryId: string,
  enabled = true,
) => {
  const facilityCategoryQuery = useFacilityCategory(
    facilityCategoryId,
    enabled,
  );
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      facilityCategoryQuery.data && bookingTypeQuery.data
        ? {
            facilityCategoryData: facilityCategoryQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,
    isLoading: facilityCategoryQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: facilityCategoryQuery.isFetching || bookingTypeQuery.isFetching,
    isError: facilityCategoryQuery.isError || bookingTypeQuery.isError,
    errors: {
      facilityCategory: facilityCategoryQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },
    refetch: async () => {
      await Promise.all([
        facilityCategoryQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
