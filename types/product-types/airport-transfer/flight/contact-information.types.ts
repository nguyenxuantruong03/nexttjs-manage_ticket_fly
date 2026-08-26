import { AirportTransfer } from "../core/airport-transfer.types";

export interface AirportTransferContactInformation {
  id: string;

  transferId: string;
  transfer: AirportTransfer;

  hotline?: string;

  whatsapp?: string;

  telegram?: string;

  emergencyPhone?: string;

  supportEmail?: string;

  createdAt: string;
}
