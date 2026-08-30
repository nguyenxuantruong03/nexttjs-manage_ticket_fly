"use client";

import { LanguageService } from "@/services/location/language/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const languageQueryKeys = {
  all: ["language"] as const,
  list: () => [...languageQueryKeys.all, "list"] as const,
  detail: (id: string) => [...languageQueryKeys.all, "detail", id] as const,
};

export function useLanguages(enabled = true) {
  return useQuery({
    queryKey: languageQueryKeys.list(),
    queryFn: () => LanguageService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useLanguage(id: string, enabled = true) {
  return useQuery({
    queryKey: languageQueryKeys.detail(id),
    queryFn: () => LanguageService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateLanguage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof LanguageService.create>[0]) =>
      LanguageService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: languageQueryKeys.list(),
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
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: languageQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: languageQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteLanguage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => LanguageService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: languageQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: languageQueryKeys.detail(id) }),
      ]);
    },
  });
}
