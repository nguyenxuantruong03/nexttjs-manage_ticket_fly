import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { LegalDocument } from "@/types/common/commerce/compliance-legal.type";

export const LegalDocumentServerService = createServerCrudApi<LegalDocument>(
  API.LEGAL_DOCUMENT,
);
