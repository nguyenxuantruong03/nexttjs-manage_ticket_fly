import { ReasonCodeFormSchema } from "./schema";
import { reasonCodeDefaultValues } from "./default-values";
import { ReasonCode } from "@/types/common/catalog/reason-code.type";

export function initReasonCodeFormValues(
  reasonCode?: ReasonCode,
): ReasonCodeFormSchema {
  if (!reasonCode) {
    return structuredClone(reasonCodeDefaultValues);
  }

  return {
    code: reasonCode.code ?? "",
    title: reasonCode.title ?? "",
    description: reasonCode.description ?? null,

    // ======================================================
    // CONTEXT
    // ======================================================

    contextId: reasonCode.contextId ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    severity: reasonCode.severity ?? 1,
    isActive: reasonCode.isActive ?? true,
  };
}
