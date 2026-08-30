"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "@/hooks/location/useLocationFormData";
import { FlyAirportService } from "@/services/product-types/references/airport/client";

export const useFlyAirportCreateFormData = (enabled = true) => {
  const locationQuery = useLocationFormData(
    ["fly-airport-location-data"],
    enabled,
  );

  const flyAirportQuery = useQuery({
    queryKey: ["fly-airport-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [searchTagData, airportData] = await Promise.all([
        SearchTagService.getMany(),
        FlyAirportService.getMany(),
      ]);

      return {
        searchTagData,
        airportData,
      };
    },
  });

  return {
    data:
      locationQuery.data && flyAirportQuery.data
        ? {
            ...flyAirportQuery.data,
            ...locationQuery.data,
          }
        : undefined,

    isLoading: locationQuery.isLoading || flyAirportQuery.isLoading,
    isFetching: locationQuery.isFetching || flyAirportQuery.isFetching,

    // isError là field bool duy nhất dùng để check "có lỗi hay không"
    // ở component (if (isError || !data) ...). "errors" bên dưới chỉ
    // dùng khi cần hiển thị message/nguồn lỗi cụ thể, không thay thế
    // isError.
    isError: locationQuery.isError || flyAirportQuery.isError,
    // Có 2 nguồn dữ liệu độc lập (location + airport/search-tag) nên
    // tách 2 key riêng để biết lỗi đến từ đâu.
    errors: {
      location: locationQuery.error as Error | null,
      flyAirport: flyAirportQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), flyAirportQuery.refetch()]);
    },
  };
};
