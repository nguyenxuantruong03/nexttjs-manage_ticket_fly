"use client";

import { useState } from "react";
import { Database } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import { AuditLog } from "@/types/system/system-governance.type";

import { TargetHeader } from "./target-header";
import { TargetData } from "./target-data";
import { AuditHistoryItem } from "./audit-history-item";

import { useAuditLogTarget } from "@/hooks/system/audit-log/audit-log-target";
import { UserQuickViewDialog } from "../user-quick-view/user-quick-view-dialog";

interface Props {
  open: boolean;
  row: AuditLog | null;
  onOpenChange: (open: boolean) => void;
}

export function AuditLogTargetDialog({ open, row, onOpenChange }: Props) {
  const [actorId, setActorId] = useState<string | null>(null);
  const [actorDialogOpen, setActorDialogOpen] = useState(false);

  const handleActorClick = (id: string) => {
    setActorId(id);
    setActorDialogOpen(true);
  };

  const targetType = row?.targetType ?? "";
  const targetId = row?.targetId ?? "";

  const hasTargetId = !!targetId;

  const query = useAuditLogTarget(targetType, targetId, open && !!targetType);

  const target = query.data?.target ?? null;
  const logs = query.data?.logs ?? [];

  return (
    <>
      <UserQuickViewDialog
        actorId={actorId}
        open={actorDialogOpen}
        onOpenChange={setActorDialogOpen}
      />

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-3xl">
          <DialogHeader className="border-b px-6 py-5">
            <DialogTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              {hasTargetId ? "Target Details" : "Audit Details"}
            </DialogTitle>

            <DialogDescription>
              {hasTargetId
                ? "Target information and audit history"
                : "Audit history and value changes"}
            </DialogDescription>
          </DialogHeader>

          {query.isPending && (
            <div className="flex min-h-60 items-center justify-center">
              <p className="text-sm text-muted-foreground">
                Loading audit history...
              </p>
            </div>
          )}

          {query.isError && (
            <div className="flex min-h-60 items-center justify-center">
              <p className="text-sm text-destructive">
                Failed to load audit history.
              </p>
            </div>
          )}

          {!query.isPending && !query.isError && (
            <div className="space-y-6 px-6 py-5">
              {/* ======================================================
                  TARGET
              ====================================================== */}

              {target ? (
                <>
                  <TargetHeader type={target.type} id={target.id} />

                  <Separator />

                  <TargetData data={target.data} />

                  <Separator />
                </>
              ) : (
                <div className="rounded-lg border bg-muted/30 p-4">
                  <div className="text-sm font-medium">{targetType}</div>

                  <p className="mt-1 text-xs text-muted-foreground">
                    This audit event does not have a target record.
                  </p>
                </div>
              )}

              {/* ======================================================
                  AUDIT HISTORY
              ====================================================== */}

              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-semibold">Audit History</h3>

                  <p className="text-xs text-muted-foreground">
                    {logs.length} audit event
                    {logs.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {logs.length > 0 ? (
                  <div className="space-y-3">
                    {logs.map((log) => (
                      <AuditHistoryItem
                        key={log.id}
                        log={log}
                        onActorClick={handleActorClick}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed p-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      No audit history found.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
