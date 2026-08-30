"use client";

import { CarRentalDocumentTypeService } from "@/services/product-types/car-rental/document-type/client";

import { useQuery } from "@tanstack/react-query";

export const useCarRentalDocumentTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["car-rental-document-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,

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
    // Chỉ có 1 nguồn dữ liệu (documentType) nên lấy thẳng message của nó.
    errors: {
      documentType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
