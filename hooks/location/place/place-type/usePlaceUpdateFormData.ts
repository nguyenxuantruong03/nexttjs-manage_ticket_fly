"use client";

import { usePlaceType } from "@/hooks/location/place/place-type";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const usePlaceTypeUpdateFormData = (
  placeTypeId: string,
  enabled = true,
) => {
  const placeTypeQuery = usePlaceType(placeTypeId, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: placeTypeQuery.data
      ? {
          initialData: placeTypeQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: placeTypeQuery.isLoading,

    isFetching: placeTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: placeTypeQuery.isError,

    errors: {
      placeType: placeTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: placeTypeQuery.refetch,
  };
};
