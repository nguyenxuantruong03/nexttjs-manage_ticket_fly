import { Policy } from "@/types/common/features/policy/policy";
import { Fly } from "../core/fly.types";

export interface FlyPolicyMapper {
  id: string;

  flyId: string;
  fly?: Fly;

  policyId: string;
  policy?: Policy;

  valueBoolean?: boolean;
  valueNumber?: number;
  valueText?: string;
  valueJson?: unknown;

  active: boolean;

  createdAt: Date;
  updatedAt: Date;
}
