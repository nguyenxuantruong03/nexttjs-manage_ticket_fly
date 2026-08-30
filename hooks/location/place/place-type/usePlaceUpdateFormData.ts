"use client";

import { usePlaceType } from "@/hooks/location/place/place-type";

export const usePlaceTypeUpdateFormData = (
  placeTypeId: string,
  enabled = true,
) => {
  const placeTypeQuery = usePlaceType(placeTypeId, enabled);

  return {
    data: placeTypeQuery.data
      ? { initialData: placeTypeQuery.data }
      : undefined,

    isLoading: placeTypeQuery.isLoading,
    isFetching: placeTypeQuery.isFetching,

    isError: placeTypeQuery.isError,
    errors: {
      placeType: placeTypeQuery.error as Error | null,
    },

    refetch: placeTypeQuery.refetch,
  };
};
