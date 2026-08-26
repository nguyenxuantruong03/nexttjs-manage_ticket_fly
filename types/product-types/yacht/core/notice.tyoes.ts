import { Yacht } from "./yacht.types";

export interface YachtNotice {
  id: string;

  yachtId: string;
  yacht: Yacht;

  important?: string | null;

  beforeBooking?: string | null;

  afterBooking?: string | null;

  safetyNotice?: string | null;

  createdAt: Date;
}
