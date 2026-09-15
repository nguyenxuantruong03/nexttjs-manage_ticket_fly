"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { AuditLogService } from "@/services/system/audit-log/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const auditLogQueryKeys = {
  all: ["audit-log"] as const,

  lists: () => [...auditLogQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...auditLogQueryKeys.lists(), { page, limit }] as const,

  details: () => [...auditLogQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...auditLogQueryKeys.details(), id] as const,

  target: (targetType: string, targetId: string) =>
    [...auditLogQueryKeys.all, "target", targetType, targetId] as const,

  actor: (actorId: string) =>
    [...auditLogQueryKeys.all, "actor", actorId] as const,
};

// ======================================================
// Queries
// ======================================================

export function useAuditLogs(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: auditLogQueryKeys.list(page, limit),
    queryFn: () =>
      AuditLogService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useAuditLog(id: string, enabled = true) {
  return useQuery({
    queryKey: auditLogQueryKeys.detail(id),
    queryFn: () => AuditLogService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Target
// ======================================================

export function useAuditLogByTarget(
  targetType: string,
  targetId: string,
  enabled = true,
) {
  return useQuery({
    queryKey: auditLogQueryKeys.target(targetType, targetId),
    queryFn: () => AuditLogService.findByTarget(targetType, targetId),
    enabled: enabled && Boolean(targetType) && Boolean(targetId),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Actor
// ======================================================

export function useAuditLogByActor(actorId: string, enabled = true) {
  return useQuery({
    queryKey: auditLogQueryKeys.actor(actorId),
    queryFn: () => AuditLogService.getByActor(actorId),
    enabled: enabled && Boolean(actorId),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}
