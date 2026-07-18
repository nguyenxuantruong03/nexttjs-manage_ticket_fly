export interface YachtNotice {
  id: string;

  yachtId: string;

  important?: string | null;

  beforeBooking?: string | null;

  afterBooking?: string | null;

  safetyNotice?: string | null;

  createdAt: Date;
}
