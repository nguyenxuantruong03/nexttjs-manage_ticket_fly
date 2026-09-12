import { AuditTargetLog } from "@/types/system/system-governance.type";
import { formatDate } from "./utils";

interface AuditHistoryItemProps {
  log: AuditTargetLog;
  onActorClick?: (actorId: string) => void;
}

export function AuditHistoryItem({ log, onActorClick }: AuditHistoryItemProps) {
  return (
    <div className="rounded-lg border p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
          {log.action}
        </span>

        <span className="text-xs text-muted-foreground">
          {formatDate(String(log.createdAt))}
        </span>
      </div>

      {log.actorId && (
        <button
          type="button"
          onClick={() => onActorClick?.(log.actorId!)}
          className="mt-2 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          View actor
        </button>
      )}
    </div>
  );
}
