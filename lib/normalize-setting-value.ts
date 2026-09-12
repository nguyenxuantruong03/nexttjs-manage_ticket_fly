import type { JsonValue } from "@/types/system/system-governance.type";

export function normalizeSettingValue(value: JsonValue | undefined): JsonValue {
  if (value === undefined) {
    return null;
  }

  if (typeof value !== "string") {
    return value;
  }

  const trimmed = value.trim();

  // Empty string
  if (trimmed === "") {
    return "";
  }

  // JSON literal / primitive
  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  if (trimmed === "null") {
    return null;
  }

  // JSON object / array
  if (
    (trimmed.startsWith("{") && trimmed.endsWith("}")) ||
    (trimmed.startsWith("[") && trimmed.endsWith("]"))
  ) {
    try {
      const parsed: unknown = JSON.parse(trimmed);

      if (isJsonValue(parsed)) {
        return parsed;
      }
    } catch {
      // Invalid JSON → keep original string
    }

    return value;
  }

  // Number
  if (isJsonNumber(trimmed)) {
    const numberValue = Number(trimmed);

    if (Number.isFinite(numberValue)) {
      return numberValue;
    }
  }

  // Normal string
  return value;
}

function isJsonNumber(value: string): boolean {
  return /^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?$/.test(value);
}

function isJsonValue(value: unknown): value is JsonValue {
  if (
    value === null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return true;
  }

  if (Array.isArray(value)) {
    return value.every(isJsonValue);
  }

  if (typeof value === "object") {
    return Object.values(value).every(isJsonValue);
  }

  return false;
}
