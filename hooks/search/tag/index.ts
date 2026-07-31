"use client";
import { SearchTagService } from "@/services/search/tag/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["search-tag"] as const;

export function useSearchTags() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => SearchTagService.getMany(),
  });
}

export function useSearchTag(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => SearchTagService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateSearchTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: SearchTagService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateSearchTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof SearchTagService.update>[1];
    }) => SearchTagService.update(id, data),

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

export function useDeleteSearchTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: SearchTagService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
