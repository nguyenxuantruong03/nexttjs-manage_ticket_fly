
export interface HotelBookingPolicy {
  id: string;

  policiesId: string;

  instantConfirmation: boolean;

  refundable: boolean;

  payAtHotel?: boolean | null;

  payLater?: boolean | null;

  breakfastIncluded?: boolean | null;

  mobileVoucher?: boolean | null;

  onlineCheckIn?: boolean | null;

  onlineCheckOut?: boolean | null;

  requiresCreditCardGuarantee?: boolean | null;

  requiresDeposit?: boolean | null;

  requiresGovernmentId?: boolean | null;

  allowsModification?: boolean | null;
}