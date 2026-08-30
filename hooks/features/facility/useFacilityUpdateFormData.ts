"use client";

import { useFacility } from "@/hooks/features/facility";
import { useFacilityCategories } from "@/hooks/features/facility-category";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useFacilityUpdateFormData = (
  facilityId: string,
  enabled = true,
) => {
  const facilityQuery = useFacility(facilityId, enabled);
  const facilityCategoryQuery = useFacilityCategories(enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      facilityQuery.data && facilityCategoryQuery.data && bookingTypeQuery.data
        ? {
            facilityData: facilityQuery.data,
            facilityCategoryData: facilityCategoryQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,
    isLoading:
      facilityQuery.isLoading ||
      facilityCategoryQuery.isLoading ||
      bookingTypeQuery.isLoading,
    isFetching:
      facilityQuery.isFetching ||
      facilityCategoryQuery.isFetching ||
      bookingTypeQuery.isFetching,
    isError:
      facilityQuery.isError ||
      facilityCategoryQuery.isError ||
      bookingTypeQuery.isError,
    errors: {
      facility: facilityQuery.error as Error | null,
      facilityCategory: facilityCategoryQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },
    refetch: async () => {
      await Promise.all([
        facilityQuery.refetch(),
        facilityCategoryQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
