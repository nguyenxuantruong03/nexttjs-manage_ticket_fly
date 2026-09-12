import { LegalDocumentFormSchema } from "./schema";

import { legalDocumentDefaultValues } from "./default-values";
import { LegalDocument } from "@/types/common/commerce/compliance-legal.type";


export function initLegalDocumentFormValues(
  legalDocument?: LegalDocument,
): LegalDocumentFormSchema {
  if (!legalDocument) {
    return structuredClone(legalDocumentDefaultValues);
  }

  return {
    merchantId: legalDocument.merchantId ?? "",
    title: legalDocument.title ?? "",
    fileUrl: legalDocument.fileUrl ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    signedAt: legalDocument.signedAt ?? null,
    expiresAt: legalDocument.expiresAt ?? null,
    status: legalDocument.status ?? "DRAFT",
  };
}
