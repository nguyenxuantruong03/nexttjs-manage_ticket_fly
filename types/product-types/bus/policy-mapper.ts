import { Policy } from "@/types/common/features/policy/policy";

import { Bus } from "./core/bus.types";

export interface BusPolicyMapper {
  id: string;

  busId: string;
  bus: Bus;

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