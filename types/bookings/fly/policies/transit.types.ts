import { FlyPolicies } from "./policies.types";

export interface FlyTransitPolicy {
  id: string;

  policiesId: string;

  policies?: FlyPolicies;

  selfTransfer: boolean;

  baggageTransfer: boolean;

  visaRequiredDuringTransit: boolean;

  minimumConnectionMinutes?: number;
}