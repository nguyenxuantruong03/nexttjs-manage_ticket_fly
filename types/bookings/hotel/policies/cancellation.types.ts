
export interface HotelCancellationPolicy {
  id: string;

  freeCancellation?: boolean | null;

  freeCancellationBeforeHours?: number | null;

  cancellationFee?: number | null;

  noShowFee?: number | null;

  policiesId: string;
}