import { FlyPolicies } from "./policies.types";

export interface FlyPassengerPolicy {
  id: string;

  policiesId: string;

  policies?: FlyPolicies;

  infantAllowed: boolean;

  childAllowed: boolean;

  petsAllowed: boolean;

  unaccompaniedMinor: boolean;

  wheelchairSupport: boolean;

  pregnantPassengerAllowed: boolean;
}