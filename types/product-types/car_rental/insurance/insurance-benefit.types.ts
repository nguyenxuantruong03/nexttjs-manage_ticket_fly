import { InsuranceBenefitType } from "../insurance-type.type";
import { CarRentalInsurance } from "./insurance.types";

export interface CarRentalInsuranceBenefit {
  id: string;

  insuranceId: string;
  insurance: CarRentalInsurance;

  typeId: string | null;
  type: InsuranceBenefitType | null;

  title: string;

  description: string | null;

  coverageAmount: number | null;

  excessAmount: number | null;

  createdAt: string;
}
