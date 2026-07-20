import { CarRentalInsuranceBenefitType } from "../enums";

export interface CarRentalInsuranceBenefit {
  id: string;

  insuranceId: string;

  type: CarRentalInsuranceBenefitType;

  title: string;

  description?: string;

  coverageAmount?: number;

  excessAmount?: number;


  createdAt: string;
}