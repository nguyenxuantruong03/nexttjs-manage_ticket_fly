import { CheckCircle2, XCircle } from "lucide-react";

interface StatusCardProps {
  label: string;
  enabled: boolean;
}

export function StatusCard({
  label,
  enabled,
}: StatusCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="flex min-w-0 items-center gap-2.5">
        {enabled ? (
          <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
        ) : (
          <XCircle className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}

        <span className="truncate text-sm">
          {label}
        </span>
      </div>

      <span
        className={
          enabled
            ? "text-xs font-medium text-green-600"
            : "text-xs font-medium text-muted-foreground"
        }
      >
        {enabled ? "Enabled" : "Disabled"}
      </span>
    </div>
  );
}