"use client"
import { CarRentalService } from "@/services/car-rental/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["car-rental"] as const;

export function useCarRentals() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => CarRentalService.getMany(),
  });
}

export function useCarRental(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => CarRentalService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateCarRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CarRentalService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateCarRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CarRentalService.update>[1];
    }) => CarRentalService.update(id, data),

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

export function useDeleteCarRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CarRentalService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
