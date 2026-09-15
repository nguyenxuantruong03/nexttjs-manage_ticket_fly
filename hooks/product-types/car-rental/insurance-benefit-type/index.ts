"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { CarRentalInsuranceBenefitTypeService } from "@/services/product-types/car-rental/insurance-benefit-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const carRentalInsuranceBenefitTypeQueryKeys = {
  all: ["car-rental-insurance-benefit-type"] as const,

  lists: () => [...carRentalInsuranceBenefitTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [
      ...carRentalInsuranceBenefitTypeQueryKeys.lists(),
      { page, limit },
    ] as const,

  details: () =>
    [...carRentalInsuranceBenefitTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...carRentalInsuranceBenefitTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useCarRentalInsuranceBenefitTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: carRentalInsuranceBenefitTypeQueryKeys.list(page, limit),

    queryFn: () =>
      CarRentalInsuranceBenefitTypeService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

export function useCarRentalInsuranceBenefitType(id: string, enabled = true) {
  return useQuery({
    queryKey: carRentalInsuranceBenefitTypeQueryKeys.detail(id),

    queryFn: () => CarRentalInsuranceBenefitTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateCarRentalInsuranceBenefitType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof CarRentalInsuranceBenefitTypeService.create>[0],
    ) => CarRentalInsuranceBenefitTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: carRentalInsuranceBenefitTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateCarRentalInsuranceBenefitType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CarRentalInsuranceBenefitTypeService.update>[1];
    }) => CarRentalInsuranceBenefitTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceBenefitTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceBenefitTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteCarRentalInsuranceBenefitType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CarRentalInsuranceBenefitTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceBenefitTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: carRentalInsuranceBenefitTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
