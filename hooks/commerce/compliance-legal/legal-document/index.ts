"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { LegalDocumentService } from "@/services/commerce/compliance-legal/legal-document/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const legalDocumentQueryKeys = {
  all: ["legal-document"] as const,

  lists: () => [...legalDocumentQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...legalDocumentQueryKeys.lists(), { page, limit }] as const,

  details: () => [...legalDocumentQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...legalDocumentQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useLegalDocuments(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: legalDocumentQueryKeys.list(page, limit),

    queryFn: () =>
      LegalDocumentService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

// ======================================================
// FIND ONE
// ======================================================

export function useLegalDocument(id: string, enabled = true) {
  return useQuery({
    queryKey: legalDocumentQueryKeys.detail(id),

    queryFn: () => LegalDocumentService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateLegalDocument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof LegalDocumentService.create>[0]) =>
      LegalDocumentService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: legalDocumentQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateLegalDocument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof LegalDocumentService.update>[1];
    }) => LegalDocumentService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: legalDocumentQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: legalDocumentQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteLegalDocument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => LegalDocumentService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: legalDocumentQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: legalDocumentQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
