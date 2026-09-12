import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { LegalDocument } from "@/types/common/commerce/compliance-legal.type";

export const LegalDocumentService = createCrudApi<LegalDocument>(
  clientHttp,
  API.LEGAL_DOCUMENT,
);
