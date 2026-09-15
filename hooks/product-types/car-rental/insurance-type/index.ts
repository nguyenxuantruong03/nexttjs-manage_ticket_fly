"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { CarRentalInsuranceTypeService } from "@/services/product-types/car-rental/insurance-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const carRentalInsuranceTypeQueryKeys = {
  all: ["car-rental-insurance-type"] as const,

  lists: () => [...carRentalInsuranceTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...carRentalInsuranceTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...carRentalInsuranceTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...carRentalInsuranceTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useCarRentalInsuranceTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: carRentalInsuranceTypeQueryKeys.list(page, limit),

    queryFn: () =>
      CarRentalInsuranceTypeService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

export function useCarRentalInsuranceType(id: string, enabled = true) {
  return useQuery({
    queryKey: carRentalInsuranceTypeQueryKeys.detail(id),

    queryFn: () => CarRentalInsuranceTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateCarRentalInsuranceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof CarRentalInsuranceTypeService.create>[0],
    ) => CarRentalInsuranceTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: carRentalInsuranceTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateCarRentalInsuranceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CarRentalInsuranceTypeService.update>[1];
    }) => CarRentalInsuranceTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteCarRentalInsuranceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CarRentalInsuranceTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: carRentalInsuranceTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
