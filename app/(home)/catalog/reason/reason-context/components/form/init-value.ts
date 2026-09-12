import { ReasonContextFormSchema } from "./schema";
import { reasonContextDefaultValues } from "./default-values";
import { ReasonContext } from "@/types/common/catalog/reason-code.type";

export function initReasonContextFormValues(
  reasonContext?: ReasonContext,
): ReasonContextFormSchema {
  if (!reasonContext) {
    return structuredClone(reasonContextDefaultValues);
  }

  return {
    code: reasonContext.code ?? "",
    name: reasonContext.name ?? "",
    description: reasonContext.description ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    isActive: reasonContext.isActive ?? true,
  };
}
