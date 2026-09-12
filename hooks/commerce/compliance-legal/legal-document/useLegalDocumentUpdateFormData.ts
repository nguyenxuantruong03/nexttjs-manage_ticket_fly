"use client";

import { useLegalDocument } from ".";

export const useLegalDocumentUpdateFormData = (
  legalDocumentId: string,
  enabled = true,
) => {
  const legalDocumentQuery = useLegalDocument(legalDocumentId, enabled);

  return {
    data: legalDocumentQuery.data
      ? { legalDocumentData: legalDocumentQuery.data }
      : undefined,

    isLoading: legalDocumentQuery.isLoading,

    isFetching: legalDocumentQuery.isFetching,

    isError: legalDocumentQuery.isError,

    errors: {
      legalDocument: legalDocumentQuery.error as Error | null,
    },

    refetch: legalDocumentQuery.refetch,
  };
};
