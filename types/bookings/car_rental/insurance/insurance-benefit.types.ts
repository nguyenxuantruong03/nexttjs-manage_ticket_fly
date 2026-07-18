import { Currency } from "@/types/common/enums";
import { CarRentalInsuranceBenefitType } from "../enums";

export interface CarRentalInsuranceBenefit {
  id: string;

  insuranceId: string;

  type: CarRentalInsuranceBenefitType;

  title: string;

  description?: string;

  coverageAmount?: number;

  excessAmount?: number;

  currency?: Currency;

  createdAt: string;
}