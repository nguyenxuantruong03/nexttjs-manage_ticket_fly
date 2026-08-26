import { Policy } from "@/types/common/features/policy/policy";
import { CarRental } from "../core/car-rental.types";

export interface CarRentalPolicyMapper {
  id: string;

  rentalId: string;
  rental: CarRental;

  policyId: string;
  policy: Policy;

  valueBoolean: boolean | null;

  valueNumber: number | null;

  valueText: string | null;

  valueJson: unknown | null;

  active: boolean;

  createdAt: string;

  updatedAt: string;
}
