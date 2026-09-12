// types/risk/risk-score.ts

import { ReasonCode } from "../catalog/reason-code.type";

export type RiskTargetType = "USER" | "BOOKING" | "PAYMENT";

export interface RiskScore {
  id: string;

  /**
   * Entity being evaluated
   */
  targetType: RiskTargetType;
  targetId: string;

  /**
   * Risk score: 0-100
   */
  score: number;

  /**
   * Detailed factors used to calculate the score
   */
  factors?: Record<string, unknown> | null;

  calculatedAt: Date;
}

// types/fraud/fraud-case.ts

export type FraudCaseStatus =
  | "OPEN"
  | "INVESTIGATING"
  | "CONFIRMED"
  | "DISMISSED"
  | "RESOLVED";

export type FraudTargetType = "USER" | "BOOKING" | "PAYMENT";

export interface FraudCase {
  id: string;

  /**
   * Entity being investigated
   */
  targetType: FraudTargetType;
  targetId: string;

  /**
   * Optional reason for the fraud case
   */
  reasonCodeId?: string | null;
  reasonCode?: ReasonCode | null;

  status: FraudCaseStatus;

  /**
   * Admin/user assigned to investigate
   */
  assignedTo?: string | null;

  /**
   * Investigation resolution
   */
  resolution?: string | null;

  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date | null;
}

export type IdentifierType =
  | "EMAIL"
  | "PHONE"
  | "DEVICE_ID"
  | "CARD_HASH"
  | "IP_ADDRESS";

export interface BlacklistEntry {
  id: string;

  type: IdentifierType;

  /**
   * Identifier value.
   * Sensitive values such as CARD_HASH should normally be stored hashed.
   */
  value: string;

  reasonCodeId?: string | null;
  reasonCode?: ReasonCode | null;

  isActive: boolean;

  /**
   * Admin/user who created the entry
   */
  createdBy?: string | null;

  createdAt: Date;

  /**
   * null = does not expire
   */
  expiresAt?: Date | null;
}

// types/security/whitelist-entry.ts

export interface WhitelistEntry {
  id: string;

  type: IdentifierType;

  value: string;

  note?: string | null;

  isActive: boolean;

  /**
   * Admin/user who created the entry
   */
  createdBy?: string | null;

  createdAt: Date;

  /**
   * null = does not expire
   */
  expiresAt?: Date | null;
}
