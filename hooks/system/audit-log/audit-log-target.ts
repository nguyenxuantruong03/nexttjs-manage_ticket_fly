// ======================================================
// Target
// ======================================================

import { AuditLogService } from "@/services/system/audit-log/client";
import { useQuery } from "@tanstack/react-query";

export function useAuditLogTarget(
  targetType: string,
  targetId: string,
  enabled = true,
) {
  return useQuery({
    queryKey: ["audit-log", "target", targetType, targetId],

    queryFn: async () => {
      const data = await AuditLogService.findByTarget(targetType, targetId);

      return data;
    },

    enabled: enabled && !!targetType && !!targetId,

    staleTime: 5 * 60 * 1000,

    gcTime: 30 * 60 * 1000,

    retry: 1,

    refetchOnWindowFocus: false,
  });
}
