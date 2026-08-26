import { CarRentalInsuranceBenefit } from "./insurance/insurance-benefit.types";
import { CarRentalInsurance } from "./insurance/insurance.types";

export interface InsuranceType {
  id: string;

  // ======================================================
  // BASIC
  // ======================================================

  name: string;

  slug: string;

  description: string | null;

  icon: string | null;

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  sortOrder: number;

  // ======================================================
  // RELATIONS
  // ======================================================

  carRentalInsurances: CarRentalInsurance[];

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}

export interface InsuranceBenefitType {
  id: string;

  // ======================================================
  // BASIC
  // ======================================================

  name: string;

  slug: string;

  description: string | null;

  icon: string | null;

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  sortOrder: number;

  // ======================================================
  // RELATIONS
  // ======================================================

  carRentalBenefits: CarRentalInsuranceBenefit[];

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
