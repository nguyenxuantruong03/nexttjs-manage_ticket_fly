"use client";


import { LegalDocumentService } from "@/services/commerce/compliance-legal/legal-document/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const legalDocumentQueryKeys = {
  all: ["legal-document"] as const,

  list: () => [...legalDocumentQueryKeys.all, "list"] as const,

  detail: (id: string) =>
    [...legalDocumentQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useLegalDocuments(enabled = true) {
  return useQuery({
    queryKey: legalDocumentQueryKeys.list(),

    queryFn: () => LegalDocumentService.getMany(),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
}

export function useLegalDocument(id: string, enabled = true) {
  return useQuery({
    queryKey: legalDocumentQueryKeys.detail(id),

    queryFn: () => LegalDocumentService.getOne(id),

    enabled: enabled && !!id,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateLegalDocument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof LegalDocumentService.create>[0],
    ) => LegalDocumentService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: legalDocumentQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
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
          queryKey: legalDocumentQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: legalDocumentQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteLegalDocument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => LegalDocumentService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: legalDocumentQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: legalDocumentQueryKeys.detail(id),
        }),
      ]);
    },
  });
}