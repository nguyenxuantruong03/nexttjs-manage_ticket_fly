import { BusRefundType } from "../enums";

export interface BusCancellationPolicy {
  id: string;

  policiesId: string;

  refundable: boolean;

  refundType: BusRefundType;

  freeCancellation: boolean;

  freeCancellationBeforeHours?: number;

  cancellationFee?: number;

  noShowFee?: number;

  createdAt: string;
}
