import { FlyPolicies } from "./policies.types";


export interface FlyChangePolicy {
  id: string;

  policiesId: string;

  policies?: FlyPolicies;

  allowed: boolean;

  changeFee?: number;

  maxChanges?: number;

  beforeDepartureHours?: number;
}