import { AirportTransfer } from "../core/airport-transfer.types";

export interface AirportTransferNotice {
  id: string;

  transferId: string;
  transfer: AirportTransfer;

  title: string;

  description: string | null;

  color: string | null;

  icon: string | null;

  priority: number;

  active: boolean;
}
