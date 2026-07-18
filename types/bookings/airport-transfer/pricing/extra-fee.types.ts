import { AirportTransferExtraFeeType } from "../enums";

export interface AirportTransferExtraFee {
  id: string;

  breakdownId: string;

  type: AirportTransferExtraFeeType;

  name: string;

  amount: number;

  required: boolean;
}