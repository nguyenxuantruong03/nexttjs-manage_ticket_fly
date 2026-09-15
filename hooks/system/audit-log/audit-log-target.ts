"use client";

import { useQuery } from "@tanstack/react-query";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

import { AuditLogService } from "@/services/system/audit-log/client";

export function useAuditLogTarget(
  targetType: string,
  targetId: string,
  enabled = true,
) {
  return useQuery({
    queryKey: ["audit-log", "target", targetType, targetId],
    queryFn: () => AuditLogService.findByTarget(targetType, targetId),
    enabled: enabled && Boolean(targetType) && Boolean(targetId),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}
