"use client";

import { CarRentalInsuranceBenefitTypeService } from "@/services/product-types/car-rental/insurance-benefit-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["car-rental-insurance-benefit-type"] as const;

export function useCarRentalInsuranceBenefitTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => CarRentalInsuranceBenefitTypeService.getMany(),
  });
}

export function useCarRentalInsuranceBenefitType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => CarRentalInsuranceBenefitTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateCarRentalInsuranceBenefitType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CarRentalInsuranceBenefitTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

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

export function useDeleteCarRentalInsuranceBenefitType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CarRentalInsuranceBenefitTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
