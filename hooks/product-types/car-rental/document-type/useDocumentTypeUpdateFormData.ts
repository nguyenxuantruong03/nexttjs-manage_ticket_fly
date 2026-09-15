"use client";

import { useQuery } from "@tanstack/react-query";

import { CarRentalDocumentTypeService } from "@/services/product-types/car-rental/document-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useCarRentalDocumentTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["car-rental-document-type-update-form-data", id],

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        CarRentalDocumentTypeService.getOne(id),
      ]);

      return {
        initialData,
      };
    },
  });

  return {
    data: query.data,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    errors: {
      documentType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
