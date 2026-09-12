import { AuditTargetLog } from "@/types/system/system-governance.type";
import { CalendarDays } from "lucide-react";
import { AuditHistoryItem } from "./audit-history-item";

interface AuditHistoryProps {
  logs: AuditTargetLog[];
}

export function AuditHistory({ logs }: AuditHistoryProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <CalendarDays className="h-4 w-4 text-muted-foreground" />

        <h3 className="text-sm font-semibold">Audit History</h3>
      </div>

      {logs.length === 0 ? (
        <div className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
          No audit history.
        </div>
      ) : (
        <div className="space-y-2">
          {logs.map((log) => (
            <AuditHistoryItem key={log.id} log={log} />
          ))}
        </div>
      )}
    </section>
  );
}
