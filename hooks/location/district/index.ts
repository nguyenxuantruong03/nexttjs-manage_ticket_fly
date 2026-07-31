"use client";
import { DistrictService } from "@/services/location/district/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["district"] as const;

export function useDistricts() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => DistrictService.getMany(),
  });
}

export function useDistrict(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => DistrictService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateDistrict() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DistrictService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateDistrict() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof DistrictService.update>[1];
    }) => DistrictService.update(id, data),

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

export function useDeleteDistrict() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DistrictService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
