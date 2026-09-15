import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";

import {
  AuditLog,
  AuditTargetResponse,
} from "@/types/system/system-governance.type";

import { User } from "@/types/users/auth/users";

export const AuditLogService = {
  ...createCrudApi<AuditLog>(clientHttp, API.AUDIT_LOG),

  findByTarget: async (targetType: string, targetId: string) => {
    const response = await clientHttp.get<AuditTargetResponse>(
      `${API.AUDIT_LOG}/target/${encodeURIComponent(
        targetType,
      )}/${encodeURIComponent(targetId)}`,
    );

    return response.data;
  },

  getByActor: async (actorId: string): Promise<User | null> => {
    const response = await clientHttp.get<User | null>(
      `${API.AUDIT_LOG}/actor/${encodeURIComponent(actorId)}`,
    );

    return response.data;
  },
};
