import { FlyRefundType } from "../enums";
import { FlyPolicies } from "./policies.types";

export interface FlyCancellationPolicy {
  id: string;

  policiesId: string;

  policies?: FlyPolicies;

  refundable: boolean;

  refundType: FlyRefundType;

  cancellationFee?: number;

  noShowFee?: number;

  freeCancellationBeforeHours?: number;
}