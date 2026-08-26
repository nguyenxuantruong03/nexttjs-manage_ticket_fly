import { FlyFareRule } from "./rule.types";

export interface FlyFareRuleType {
  id: string;

  name: string;
  description?: string;
  icon?: string;

  sortOrder: number;
  active: boolean;

  rules?: FlyFareRule[];

  createdAt: Date;
  updatedAt: Date;
}
