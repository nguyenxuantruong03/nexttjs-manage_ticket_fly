import { LegalDocumentFormSchema } from "./schema";

export const legalDocumentDefaultValues: LegalDocumentFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  merchantId: "",

  title: "",

  fileUrl: "",

  // ======================================================
  // STATUS
  // ======================================================

  signedAt: null,

  expiresAt: null,

  status: "DRAFT",
};
