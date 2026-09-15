"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";
import { useAuditLogs } from "@/hooks/system/audit-log";
import { AuditLog } from "@/types/system/system-governance.type";

import { AuditLogTable } from "./components/audit-log-table";
import { auditLogColumns } from "./components/columns";
import { createAuditLogActions } from "./features/actions";
import { createAuditLogHandlers } from "./features/handlers";
import { UserQuickViewDialog } from "./components/user-quick-view/user-quick-view-dialog";
import { AuditLogTargetDialog } from "./components/audit-log-target-dialog/audit-log-target-dialog";

const AuditLogPage = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const auditLogsQuery = useAuditLogs(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const [actorId, setActorId] = React.useState<string | null>(null);

  const [actorDialogOpen, setActorDialogOpen] = React.useState(false);

  const [targetRow, setTargetRow] = React.useState<AuditLog | null>(null);

  const [targetDialogOpen, setTargetDialogOpen] = React.useState(false);

  const handlers = createAuditLogHandlers({
    router,
    onViewTarget(row) {
      setTargetRow(row);
      setTargetDialogOpen(true);
    },
  });

  const actions = createAuditLogActions({
    onView: handlers.view,
    onViewTarget: handlers.viewTarget,
  });

  const handleActorClick = (row: AuditLog) => {
    if (!row.actorId) {
      return;
    }

    setActorId(row.actorId);
    setActorDialogOpen(true);
  };

  if (auditLogsQuery.isPending) {
    return <LoadingPage />;
  }

  if (auditLogsQuery.isError) {
    return <ErrorPage />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Audit Log</h1>

        <p className="text-sm text-muted-foreground">
          System activity and audit history
        </p>
      </div>

      <AuditLogTable
        columns={auditLogColumns(actions)}
        data={auditLogsQuery.data?.data ?? []}
        onRowClick={(row) => handlers.view(row.id)}
        onRowDoubleClick={handleActorClick}
        onRowTripleClick={handlers.viewTarget}
        manualPagination
        pageCount={auditLogsQuery.data?.meta.totalPages ?? 0}
        totalRows={auditLogsQuery.data?.meta.total ?? 0}
        pagination={pagination}
        onPaginationChange={setPagination}
      />

      <UserQuickViewDialog
        actorId={actorId}
        open={actorDialogOpen}
        onOpenChange={setActorDialogOpen}
      />

      <AuditLogTargetDialog
        open={targetDialogOpen}
        row={targetRow}
        onOpenChange={setTargetDialogOpen}
      />
    </div>
  );
};

export default AuditLogPage;
