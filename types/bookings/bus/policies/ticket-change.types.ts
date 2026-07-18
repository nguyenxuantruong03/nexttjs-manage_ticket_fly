import { BusTicketChangeType } from "../enums";

export interface BusTicketChangePolicy {
  id: string;

  policiesId: string;

  type: BusTicketChangeType;

  changeFee?: number;

  maxChanges?: number;

  changeBeforeDepartureHours?: number;

  createdAt: string;
}