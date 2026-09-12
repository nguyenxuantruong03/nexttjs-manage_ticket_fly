"use client";

import { AuditLogService } from "@/services/system/audit-log/client";
import { useQuery } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const auditLogQueryKeys = {
  all: ["audit-log"] as const,

  list: () => [...auditLogQueryKeys.all, "list"] as const,

  detail: (id: string) => [...auditLogQueryKeys.all, "detail", id] as const,

  target: (targetType: string, targetId: string) =>
    [...auditLogQueryKeys.all, "target", targetType, targetId] as const,

  actor: (actorId: string) =>
    [...auditLogQueryKeys.all, "actor", actorId] as const,
};

// ======================================================
// Queries
// ======================================================

export function useAuditLogs(enabled = true) {
  return useQuery({
    queryKey: auditLogQueryKeys.list(),
    queryFn: () => AuditLogService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useAuditLog(id: string, enabled = true) {
  return useQuery({
    queryKey: auditLogQueryKeys.detail(id),
    queryFn: () => AuditLogService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Actor
// ======================================================

export function useAuditLogByActor(actorId: string, enabled = true) {
  return useQuery({
    queryKey: auditLogQueryKeys.actor(actorId),
    queryFn: () => AuditLogService.getByActor(actorId),
    enabled: enabled && !!actorId,
    staleTime: 1000 * 60 * 5,
  });
}
