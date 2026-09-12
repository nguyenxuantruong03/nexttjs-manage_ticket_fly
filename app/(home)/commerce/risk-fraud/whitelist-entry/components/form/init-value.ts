import { WhitelistEntryFormSchema } from "./schema";

import { whitelistEntryDefaultValues } from "./default-values";
import { WhitelistEntry } from "@/types/common/commerce/risk-fraud.type";


export function initWhitelistEntryFormValues(
  whitelistEntry?: WhitelistEntry,
): WhitelistEntryFormSchema {
  if (!whitelistEntry) {
    return structuredClone(whitelistEntryDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    type: whitelistEntry.type ?? "EMAIL",
    value: whitelistEntry.value ?? "",
    note: whitelistEntry.note ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    isActive: whitelistEntry.isActive ?? true,

    // ======================================================
    // CREATED BY
    // ======================================================

    createdBy: whitelistEntry.createdBy ?? null,

    // ======================================================
    // EXPIRATION
    // ======================================================

    expiresAt: whitelistEntry.expiresAt
      ? new Date(whitelistEntry.expiresAt)
      : null,
  };
}
