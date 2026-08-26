import { Policy } from "@/types/common/features/policy/policy";

import { AirportTransfer } from "./core/airport-transfer.types";

export interface AirportTransferPolicyMapper {
  id: string;

  transferId: string;

  transfer: AirportTransfer;

  policyId: string;

  policy: Policy;

  valueBoolean: boolean | null;

  valueNumber: number | null;

  valueText: string | null;

  valueJson: unknown | null;

  active: boolean;

  createdAt: string;

  updatedAt: string;
}