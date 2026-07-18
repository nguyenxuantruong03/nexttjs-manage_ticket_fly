
export interface YachtBookingPolicy {
  id: string;

  policiesId: string;

  instantConfirmation: boolean;

  advanceBookingHours?: number | null;

  minimumBookingDuration?: number | null;

  modificationAllowed?: boolean | null;
}
