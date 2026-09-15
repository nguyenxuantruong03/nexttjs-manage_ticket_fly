"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { CarRentalDocumentTypeService } from "@/services/product-types/car-rental/document-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const carRentalDocumentTypeQueryKeys = {
  all: ["car-rental-document-type"] as const,

  lists: () =>
    [
      ...carRentalDocumentTypeQueryKeys.all,
      "list",
    ] as const,

  list: (page: number, limit: number) =>
    [
      ...carRentalDocumentTypeQueryKeys.lists(),
      { page, limit },
    ] as const,

  details: () =>
    [
      ...carRentalDocumentTypeQueryKeys.all,
      "detail",
    ] as const,

  detail: (id: string) =>
    [
      ...carRentalDocumentTypeQueryKeys.details(),
      id,
    ] as const,
};

// ======================================================
// Queries
// ======================================================

export function useCarRentalDocumentTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey:
      carRentalDocumentTypeQueryKeys.list(
        page,
        limit,
      ),

    queryFn: () =>
      CarRentalDocumentTypeService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

export function useCarRentalDocumentType(
  id: string,
  enabled = true,
) {
  return useQuery({
    queryKey:
      carRentalDocumentTypeQueryKeys.detail(id),

    queryFn: () =>
      CarRentalDocumentTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateCarRentalDocumentType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<
        typeof CarRentalDocumentTypeService.create
      >[0]
    ) =>
      CarRentalDocumentTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey:
          carRentalDocumentTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateCarRentalDocumentType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<
        typeof CarRentalDocumentTypeService.update
      >[1];
    }) =>
      CarRentalDocumentTypeService.update(
        id,
        data,
      ),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey:
            carRentalDocumentTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey:
            carRentalDocumentTypeQueryKeys.detail(
              variables.id,
            ),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteCarRentalDocumentType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      CarRentalDocumentTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey:
            carRentalDocumentTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey:
            carRentalDocumentTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}