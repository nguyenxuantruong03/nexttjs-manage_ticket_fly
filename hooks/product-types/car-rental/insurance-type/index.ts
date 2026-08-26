"use client";

import { CarRentalInsuranceTypeService } from "@/services/product-types/car-rental/insurance-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["car-rental-insurance-type"] as const;

export function useCarRentalInsuranceTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => CarRentalInsuranceTypeService.getMany(),
  });
}

export function useCarRentalInsuranceType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => CarRentalInsuranceTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateCarRentalInsuranceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CarRentalInsuranceTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

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

export function useDeleteCarRentalInsuranceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CarRentalInsuranceTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}