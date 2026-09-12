import { BlacklistEntryFormSchema } from "./schema";

import { blacklistEntryDefaultValues } from "./default-values";
import { BlacklistEntry } from "@/types/common/commerce/risk-fraud.type";

export function initBlacklistEntryFormValues(
  blacklistEntry?: BlacklistEntry,
): BlacklistEntryFormSchema {
  if (!blacklistEntry) {
    return structuredClone(blacklistEntryDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    type: blacklistEntry.type ?? "EMAIL",

    value: blacklistEntry.value ?? "",

    reasonCodeId: blacklistEntry.reasonCodeId ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    isActive: blacklistEntry.isActive ?? true,

    // ======================================================
    // CREATED BY
    // ======================================================

    createdBy: blacklistEntry.createdBy ?? null,

    // ======================================================
    // EXPIRATION
    // ======================================================

    expiresAt: blacklistEntry.expiresAt
      ? new Date(blacklistEntry.expiresAt)
      : null,
  };
}
