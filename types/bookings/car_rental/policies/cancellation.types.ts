
export interface CarRentalCancellationPolicy {
  id: string;

  refundable: boolean;

  freeCancellation: boolean;

  freeCancellationBeforeHours?: number;

  partialRefund?: boolean;

  cancellationFee?: number;

  noShowFee: number;

  policiesId: string;
}