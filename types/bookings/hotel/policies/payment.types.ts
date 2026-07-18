export interface HotelPaymentPolicy {
  id: string;

  paymentTypes: string[];

  acceptedCards: string[];

  cashAccepted?: boolean | null;

  depositRequired?: boolean | null;

  depositAmount?: number | null;

  policiesId: string;
}
