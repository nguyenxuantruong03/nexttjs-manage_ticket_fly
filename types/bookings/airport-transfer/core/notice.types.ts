import { AirportTransfer } from "../core/airport-transfer.types";

export interface AirportTransferNotice {
  id: string;

  transferId: string;
  transfer?: AirportTransfer;

  title: string;

  description?: string;

  color?: string;

  icon?: string;

  priority: number;

  active: boolean;
}