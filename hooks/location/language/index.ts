"use client";
import { LanguageService } from "@/services/location/language/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["language"] as const;

export function useLanguages() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => LanguageService.getMany(),
  });
}

export function useLanguage(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => LanguageService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateLanguage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: LanguageService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateLanguage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof LanguageService.update>[1];
    }) => LanguageService.update(id, data),

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

export function useDeleteLanguage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: LanguageService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
