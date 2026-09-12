"use client";

import { Check, Minus, Plus, X } from "lucide-react";

import type { JsonValue } from "@/types/system/system-governance.type";

interface AuditValueCellProps {
  value: JsonValue | null;
  variant?: "old" | "new";
}

type JsonPrimitive = string | number | boolean;

function isJsonPrimitive(value: JsonValue): value is JsonPrimitive {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  );
}

function formatLabel(key: string): string {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatPrimitive(value: string | number | boolean): string {
  if (typeof value === "boolean") {
    return value ? "Enabled" : "Disabled";
  }

  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US").format(value);
  }

  return value;
}

function getValueType(value: JsonValue | null): string {
  if (value === null) return "Not set";

  if (Array.isArray(value)) {
    return "List";
  }

  if (typeof value === "object") {
    return "Details";
  }

  if (typeof value === "boolean") {
    return "Yes / No";
  }

  if (typeof value === "number") {
    return "Number";
  }

  return "Text";
}

function PrimitiveValue({ value }: { value: JsonValue }) {
  if (value === null) {
    return (
      <span className="text-xs italic text-muted-foreground">Not set</span>
    );
  }

  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
        <Check className="h-3.5 w-3.5" />
        Enabled
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
        <X className="h-3.5 w-3.5" />
        Disabled
      </span>
    );
  }

  if (typeof value === "number") {
    return (
      <span className="block truncate text-sm">
        {new Intl.NumberFormat("en-US").format(value)}
      </span>
    );
  }

  if (typeof value === "string") {
    return (
      <span className="block truncate text-sm" title={value}>
        {value}
      </span>
    );
  }

  return null;
}

function ObjectValue({ value }: { value: { [key: string]: JsonValue } }) {
  const entries = Object.entries(value);

  if (entries.length === 0) {
    return <span className="text-xs text-muted-foreground">No details</span>;
  }

  return (
    <div className="space-y-2">
      {entries.map(([key, item]) => (
        <div key={key} className="flex items-start justify-between gap-4">
          <span className="text-xs text-muted-foreground">
            {formatLabel(key)}
          </span>

          <div className="max-w-[220px] text-right">
            {item === null ? (
              <span className="text-xs italic text-muted-foreground">
                Not set
              </span>
            ) : isJsonPrimitive(item) ? (
              <PrimitiveValue value={item} />
            ) : (
              <span className="text-xs text-muted-foreground">
                {Array.isArray(item) ? `${item.length} items` : "Details"}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ArrayValue({ value }: { value: JsonValue[] }) {
  if (value.length === 0) {
    return <span className="text-xs text-muted-foreground">No items</span>;
  }

  return (
    <div className="space-y-1.5">
      {value.slice(0, 5).map((item, index) => (
        <div key={index} className="rounded-md bg-muted/50 px-2.5 py-1.5">
          {typeof item === "object" && item !== null ? (
            <span className="text-xs text-muted-foreground">
              {Array.isArray(item)
                ? `Item ${index + 1}`
                : `Details ${index + 1}`}
            </span>
          ) : (
            <PrimitiveValue value={item} />
          )}
        </div>
      ))}

      {value.length > 5 && (
        <span className="block pt-1 text-xs text-muted-foreground">
          +{value.length - 5} more items
        </span>
      )}
    </div>
  );
}

export function AuditValueCell({
  value,
  variant = "old",
}: AuditValueCellProps) {
  const isOld = variant === "old";
  const isObject =
    typeof value === "object" && value !== null && !Array.isArray(value);

  const isArray = Array.isArray(value);

  return (
    <div className="group w-[280px] max-w-[280px] rounded-lg border bg-background shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-3 py-2">
        <div className="flex items-center gap-2">
          {isOld ? (
            <Minus className="h-3.5 w-3.5 text-muted-foreground" />
          ) : (
            <Plus className="h-3.5 w-3.5 text-muted-foreground" />
          )}

          <span className="text-xs font-medium">
            {isOld ? "Previous value" : "New value"}
          </span>
        </div>

        <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase text-muted-foreground">
          {getValueType(value)}
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        {value === null ? (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="italic">No value</span>
          </div>
        ) : isObject ? (
          <ObjectValue
            value={
              value as {
                [key: string]: JsonValue;
              }
            }
          />
        ) : isArray ? (
          <ArrayValue value={value} />
        ) : (
          <PrimitiveValue value={value} />
        )}
      </div>
    </div>
  );
}
