import { formatDate, isDateString } from "./utils";

interface TargetValueProps {
  value: unknown;
}

export function TargetValue({ value }: TargetValueProps) {
  if (value === null || value === undefined) {
    return <p className="text-sm font-medium">—</p>;
  }

  if (typeof value === "boolean") {
    return <p className="text-sm font-medium">{value ? "Yes" : "No"}</p>;
  }

  if (typeof value === "string" && isDateString(value)) {
    return <p className="text-sm font-medium">{formatDate(value)}</p>;
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "bigint"
  ) {
    return <p className="break-words text-sm font-medium">{String(value)}</p>;
  }

  if (Array.isArray(value)) {
    return (
      <pre className="max-h-48 overflow-auto rounded-md bg-muted p-3 text-xs">
        {JSON.stringify(value, null, 2)}
      </pre>
    );
  }

  if (typeof value === "object") {
    return (
      <pre className="max-h-48 overflow-auto rounded-md bg-muted p-3 text-xs">
        {JSON.stringify(value, null, 2)}
      </pre>
    );
  }

  return <p className="break-words text-sm">{String(value)}</p>;
}
