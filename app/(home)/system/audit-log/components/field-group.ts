export const auditLogFieldGroups = {
  Basic: ["id", "action", "actorId", "targetType", "targetId"],

  Request: ["ipAddress", "userAgent", "requestId", "serviceName"],

  Changes: ["oldValue", "newValue", "metadata"],

  Timestamp: ["createdAt"],
} as const;
