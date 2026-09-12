// =========================================================
// SYSTEM GOVERNANCE
// =========================================================

import { User } from "../users/auth/users";

export interface SystemSetting {
  id: string;
  key: string;
  value: JsonValue;
  updatedAt: string;
}

export interface AuditTarget {
  id: string;
  type: string;
  data: Record<string, unknown>;
}

export interface AuditTargetResponse {
  target: AuditTarget | null;
  logs: AuditTargetLog[];
}

export interface AuditTargetLog {
  id: string;
  action: string;
  targetType: string | null;
  targetId: string | null;
  actorId: string | null;
  createdAt: string | Date;
  [key: string]: unknown;
}

export interface AuditLog {
  id: string;
  actor: User;
  actorId: string | null;
  action: string;
  targetType: string;
  targetId: string;
  oldValue: JsonValue | null;
  newValue: JsonValue | null;
  ipAddress: string | null;
  userAgent: string | null;
  requestId: string | null;
  serviceName: string | null;
  metadata: JsonValue | null;
  createdAt: Date;
}

// =========================================================
// JSON
// =========================================================

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };
