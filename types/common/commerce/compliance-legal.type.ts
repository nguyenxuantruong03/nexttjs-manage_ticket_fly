// types/compliance/index.ts

import { BookingType } from "./booking-type";

// ======================================================
// Regulation
// ======================================================

export interface Regulation {
  id: string;

  code: string;
  version: number;

  title: string;
  content: string;

  categoryId: string;
  category?: RegulationCategory;

  effectiveFrom: Date;
  effectiveTo?: Date | null;

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;

  acceptances?: RegulationAcceptance[];
}

// ======================================================
// Regulation Category
// ======================================================

export interface RegulationCategory {
  id: string;

  code: string;
  name: string;
  description?: string | null;

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;

  regulations?: Regulation[];
}

// ======================================================
// Regulation Acceptance
// ======================================================

export interface RegulationAcceptance {
  id: string;

  regulationId: string;
  regulation?: Regulation;

  userId: string;

  acceptedAt: Date;
}

// ======================================================
// Tax Rule
// ======================================================

export interface TaxRule {
  id: string;

  /** Country IDs: VN, ID, TH... */
  countryId: string[];

  /** Applicable booking types */
  bookingTypeIds: string[]
  bookingTypes: BookingType[];

  /** Tax percentage, e.g. 10.00 */
  taxPercent: number;

  isActive: boolean;

  effectiveFrom: Date;
  effectiveTo?: Date | null;

  createdAt: Date;
  updatedAt: Date;
}

// ======================================================
// Legal Document
// ======================================================

export type LegalDocumentStatus =
  | "DRAFT"
  | "PENDING_SIGNATURE"
  | "SIGNED"
  | "EXPIRED"
  | "TERMINATED";

export interface LegalDocument {
  id: string;

  /** Merchant / partner ID */
  merchantId: string;

  title: string;

  /** Contract file URL */
  fileUrl: string;

  signedAt?: Date | null;
  expiresAt?: Date | null;

  status: LegalDocumentStatus;

  createdAt: Date;
  updatedAt: Date;
}
