"use client";

import { CountryService } from "@/services/location/country/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const countryQueryKeys = {
  all: ["country"] as const,
  list: () => [...countryQueryKeys.all, "list"] as const,
  detail: (id: string) => [...countryQueryKeys.all, "detail", id] as const,
};

export function useCountries(enabled = true) {
  return useQuery({
    queryKey: countryQueryKeys.list(),
    queryFn: () => CountryService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCountry(id: string, enabled = true) {
  return useQuery({
    queryKey: countryQueryKeys.detail(id),
    queryFn: () => CountryService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateCountry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof CountryService.create>[0]) =>
      CountryService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: countryQueryKeys.list(),
      });
    },
  });
}

export function useUpdateCountry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CountryService.update>[1];
    }) => CountryService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: countryQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: countryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteCountry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CountryService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: countryQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: countryQueryKeys.detail(id) }),
      ]);
    },
  });
}
