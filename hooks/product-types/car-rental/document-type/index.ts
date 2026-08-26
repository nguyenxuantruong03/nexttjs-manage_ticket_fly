"use client";

import { CarRentalDocumentTypeService } from "@/services/product-types/car-rental/document-type/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["car-rental-document-type"] as const;

export function useCarRentalDocumentTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => CarRentalDocumentTypeService.getMany(),
  });
}

export function useCarRentalDocumentType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => CarRentalDocumentTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateCarRentalDocumentType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CarRentalDocumentTypeService.create,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateCarRentalDocumentType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CarRentalDocumentTypeService.update>[1];
    }) => CarRentalDocumentTypeService.update(id, data),

    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, variables.id],
      });
    },
  });
}

export function useDeleteCarRentalDocumentType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CarRentalDocumentTypeService.delete,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}