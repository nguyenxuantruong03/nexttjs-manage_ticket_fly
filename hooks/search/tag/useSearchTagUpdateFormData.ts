"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";

export const useSearchTagUpdateFormData = (tagId: string, enabled = true) => {
  return useQuery({
    queryKey: ["search-tag-update-form-data", tagId],
    enabled: enabled && !!tagId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData, bookingTypeData] = await Promise.all([
        SearchTagService.getOne(tagId),
        BookingTypeService.getMany(),
      ]);

      return {
        initialData,
        bookingTypeData,
      };
    },
  });
};
