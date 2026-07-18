import { YachtRefundType } from "../enums";

export interface YachtCancellationPolicy {
  id: string;

  policiesId: string;

  refundable: boolean;

  freeCancellation: boolean;

  freeCancellationBeforeHours?: number | null;

  cancellationType: YachtRefundType;

  refundPercentage?: number | null;

  cancellationFee?: number | null;

  noShowFee?: number | null;
}