// ======================================================
// Fly Notice
// ======================================================

import { Fly } from "./fly.types";

export interface FlyNotice {
  id: string;

  flyId: string;
  fly?: Fly;

  title?: string;

  content?: string;

  baggageNotice?: string;

  checkInNotice?: string;

  visaNotice?: string;

  covidNotice?: string;

  refundNotice?: string;

  createdAt: Date;

  updatedAt: Date;
}
