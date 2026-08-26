"use client";

import { PlaceTypeService } from "@/services/location/place/place-type/client";
import { useQuery } from "@tanstack/react-query";

export const usePlaceTypeUpdateFormData = (
  placeTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["place-type-update-form-data", placeTypeId],
    enabled: enabled && !!placeTypeId,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const initialData = await PlaceTypeService.getOne(placeTypeId);

      return {
        initialData,
      };
    },
  });
};
