// types/reason/reason-context.ts

import { BlacklistEntry, FraudCase } from "../commerce/risk-fraud.type";


export interface ReasonContext {
  id: string;

  /** Machine-readable code: USER_BAN, BOOKING, MESSAGE_SPAM... */
  code: string;

  /** Display name */
  name: string;

  /** Business description */
  description?: string | null;

  /** Whether this context is active */
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;

  /** Relations */
  reasonCodes?: ReasonCode[];
}

// types/reason/reason-code.ts
export interface ReasonCode {
  id: string;

  /** Machine-readable code: SPAM_MESSAGE, BOOKING_NO_SHOW... */
  code: string;

  /** Short display title */
  title: string;

  /** Detailed description */
  description?: string | null;

  /** Reason context */
  contextId: string;
  context?: ReasonContext;

  /** Severity: 1 - 5 */
  severity: number;

  /** Whether this reason code is active */
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;

  /** Relations */
  blacklistEntries?: BlacklistEntry[];
  fraudCases?: FraudCase[];
//   contentFlags?: ContentFlag[];
//   moderationActions?: ModerationAction[];
}
