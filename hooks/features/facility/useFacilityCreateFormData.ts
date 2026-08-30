"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useFacilityCategories } from "@/hooks/features/facility-category";

export const useFacilityCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(enabled);
  const facilityCategoryQuery = useFacilityCategories(enabled);

  return {
    data:
      bookingTypeQuery.data && facilityCategoryQuery.data
        ? {
            bookingTypeData: bookingTypeQuery.data,
            facilityCategoryData: facilityCategoryQuery.data,
          }
        : undefined,
    isLoading: bookingTypeQuery.isLoading || facilityCategoryQuery.isLoading,
    isFetching: bookingTypeQuery.isFetching || facilityCategoryQuery.isFetching,
    isError: bookingTypeQuery.isError || facilityCategoryQuery.isError,
    errors: {
      bookingType: bookingTypeQuery.error as Error | null,
      facilityCategory: facilityCategoryQuery.error as Error | null,
    },
    refetch: async () => {
      await Promise.all([
        bookingTypeQuery.refetch(),
        facilityCategoryQuery.refetch(),
      ]);
    },
  };
};
