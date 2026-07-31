"use client";
import { TimezoneService } from "@/services/location/timezone/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["timezone"] as const;

export function useTimezones() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => TimezoneService.getMany(),
  });
}

export function useTimezone(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => TimezoneService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateTimezone() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TimezoneService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateTimezone() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof TimezoneService.update>[1];
    }) => TimezoneService.update(id, data),

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

export function useDeleteTimezone() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TimezoneService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
