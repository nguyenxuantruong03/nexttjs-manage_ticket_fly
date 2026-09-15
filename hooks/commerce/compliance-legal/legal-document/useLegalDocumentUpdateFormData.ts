"use client";

import { useLegalDocument } from "@/hooks/commerce/compliance-legal/legal-document";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useLegalDocumentUpdateFormData = (
  legalDocumentId: string,
  enabled = true,
) => {
  const legalDocumentQuery = useLegalDocument(legalDocumentId, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: legalDocumentQuery.data
      ? {
          legalDocumentData: legalDocumentQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: legalDocumentQuery.isLoading,

    isFetching: legalDocumentQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: legalDocumentQuery.isError,

    errors: {
      legalDocument: legalDocumentQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: legalDocumentQuery.refetch,
  };
};
