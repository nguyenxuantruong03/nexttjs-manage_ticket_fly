import { Policy } from "@/types/common/features/policy/policy";
import { Yacht } from "../core/yacht.types";

export interface YachtPolicyMapper {
  id: string;

  yachtId: string;
  yacht?: Yacht;

  policyId: string;
  policy?: Policy;

  valueBoolean?: boolean | null;
  valueNumber?: number | null;
  valueText?: string | null;
  valueJson?: unknown | null;

  active: boolean;

  createdAt: Date;
  updatedAt: Date;
}
