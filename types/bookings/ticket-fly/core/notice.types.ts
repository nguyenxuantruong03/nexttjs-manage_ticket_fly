// ======================================================
// Fly Notice
// ======================================================

import { TicketFly } from "./fly.types";



export interface FlyNotice {
  id: string;

  flyId: string;

  fly?: TicketFly;

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
