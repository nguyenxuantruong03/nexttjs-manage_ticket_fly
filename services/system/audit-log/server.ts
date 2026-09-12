import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";

import { AuditLog } from "@/types/system/system-governance.type";

export const AuditLogServerService = {
  ...createServerCrudApi<AuditLog>(API.AUDIT_LOG),

  getByTarget: (targetType: string, targetId: string) =>
    fetch(`${API.AUDIT_LOG}/target/${targetType}/${targetId}`).then((res) =>
      res.json(),
    ) as Promise<AuditLog[]>,

  getByActor: (actorId: string) =>
    fetch(`${API.AUDIT_LOG}/actor/${actorId}`).then((res) =>
      res.json(),
    ) as Promise<AuditLog[]>,
};
