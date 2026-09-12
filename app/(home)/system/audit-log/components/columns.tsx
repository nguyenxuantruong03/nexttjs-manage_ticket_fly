"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { CalendarDays, Target, User } from "lucide-react";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { AuditLog } from "@/types/system/system-governance.type";
import { AuditValueCell } from "./audit-value-cell";

function formatJsonValue(value: AuditLog["oldValue"]): string {
  if (value === null) {
    return "null";
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return "[Unable to display value]";
  }
}

export function auditLogColumns(
  actions: (row: AuditLog) => ActionMenuItem<AuditLog>[],
): ColumnDef<AuditLog>[] {
  return [
    createSelectionColumn<AuditLog>(),

    // ======================================================
    // ACTION
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "action",
      header: "Action",
      cell: (row) => (
        <div className="font-medium whitespace-nowrap">{row.action}</div>
      ),
    }),

    // ======================================================
    // ACTOR ID
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "actorId",
      header: "Actor ID",
      cell: (row) =>
        row.actorId ? (
          <div className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-muted-foreground" />

            <span className="max-w-[180px] truncate font-mono text-sm">
              {row.actorId}
            </span>
          </div>
        ) : (
          <span className="text-muted-foreground">System</span>
        ),
    }),

    // ======================================================
    // TARGET TYPE
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "targetType",
      header: "Target Type",
      cell: (row) => (
        <span className="font-medium whitespace-nowrap">{row.targetType}</span>
      ),
    }),

    // ======================================================
    // TARGET ID
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "targetId",
      header: "Target ID",
      cell: (row) => (
        <div className="flex items-center gap-1.5">
          <Target className="h-3.5 w-3.5 text-muted-foreground" />

          <span className="max-w-[180px] truncate font-mono text-sm">
            {row.targetId}
          </span>
        </div>
      ),
    }),

    // ======================================================
    // OLD VALUE
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "oldValue",
      header: "Old Value",
      exclude: ["filtering", "sorting"],
      cell: (row) => <AuditValueCell value={row.oldValue} variant="old" />,
    }),

    // ======================================================
    // NEW VALUE
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "newValue",
      header: "New Value",
      exclude: ["filtering", "sorting"],
      cell: (row) => <AuditValueCell value={row.newValue} variant="new" />,
    }),

    // ======================================================
    // METADATA
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "metadata",
      header: "Metadata",
      exclude: ["filtering", "sorting"],
      cell: (row) => {
        const value = formatJsonValue(row.metadata);

        return (
          <pre className="max-w-[300px] overflow-hidden whitespace-pre-wrap break-words rounded-md bg-muted p-2 font-mono text-xs">
            {value}
          </pre>
        );
      },
    }),

    // ======================================================
    // SERVICE
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "serviceName",
      header: "Service",
      cell: (row) =>
        row.serviceName ? (
          <span className="whitespace-nowrap">{row.serviceName}</span>
        ) : (
          <span className="text-muted-foreground">—</span>
        ),
    }),

    // ======================================================
    // IP ADDRESS
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "ipAddress",
      header: "IP Address",
      exclude: ["filtering", "sorting"],
      cell: (row) =>
        row.ipAddress ? (
          <span className="font-mono text-sm whitespace-nowrap">
            {row.ipAddress}
          </span>
        ) : (
          <span className="text-muted-foreground">—</span>
        ),
    }),

    // ======================================================
    // USER AGENT
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "userAgent",
      header: "User Agent",
      exclude: ["filtering", "sorting"],
      cell: (row) =>
        row.userAgent ? (
          <span
            title={row.userAgent}
            className="block max-w-[350px] truncate font-mono text-xs"
          >
            {row.userAgent}
          </span>
        ) : (
          <span className="text-muted-foreground">—</span>
        ),
    }),

    // ======================================================
    // REQUEST ID
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "requestId",
      header: "Request ID",
      exclude: ["filtering", "sorting"],
      cell: (row) =>
        row.requestId ? (
          <span
            title={row.requestId}
            className="block max-w-[200px] truncate font-mono text-xs"
          >
            {row.requestId}
          </span>
        ) : (
          <span className="text-muted-foreground">—</span>
        ),
    }),

    // ======================================================
    // CREATED AT
    // ======================================================

    createDataTableColumn<AuditLog>({
      accessorKey: "createdAt",
      header: "Created At",
      meta: {
        align: "right",
      },
      cell: (row) => (
        <div className="flex items-center justify-end gap-1.5 text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />

          <span className="whitespace-nowrap">
            {new Date(row.createdAt).toLocaleString("vi-VN", {
              dateStyle: "short",
              timeStyle: "short",
            })}
          </span>
        </div>
      ),
    }),

    // ======================================================
    // ACTIONS
    // ======================================================

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
