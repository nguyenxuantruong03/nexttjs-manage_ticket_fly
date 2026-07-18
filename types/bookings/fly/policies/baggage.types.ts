import { FlyPolicies } from "./policies.types";

export interface FlyBaggagePolicy {
  id: string;

  policiesId: string;

  policies?: FlyPolicies;

  cabinIncludedKg?: number;

  checkedIncludedKg?: number;

  extraAllowed: boolean;

  extraPricePerKg?: number;
}