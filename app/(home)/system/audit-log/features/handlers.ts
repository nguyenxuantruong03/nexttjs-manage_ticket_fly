import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { AuditLog } from "@/types/system/system-governance.type";
import { AuditLogRoutes } from "./routes";

interface Props {
  router: AppRouterInstance;
  onViewTarget: (row: AuditLog) => void;
}

export function createAuditLogHandlers({ router, onViewTarget }: Props) {
  return {
    view(id: string) {
      router.push(AuditLogRoutes.detail(id));
    },

    viewTarget(row: AuditLog) {
      if (!row.targetType || !row.targetId) {
        return;
      }

      onViewTarget(row);
    },
  };
}
