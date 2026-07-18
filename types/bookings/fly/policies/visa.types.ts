import { FlyPolicies } from "./policies.types";



export interface FlyVisaPolicy {
  id: string;

  policiesId: string;

  policies?: FlyPolicies;

  visaRequired?: boolean;

  passportRequired?: boolean;

  passportMinimumValidityMonths?: number;

  healthDocumentsRequired?: boolean;

  note?: string;
}
