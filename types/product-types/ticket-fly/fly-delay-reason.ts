import { FlyDelay } from "./operation/delay.types";

export interface FlyDelayReason {
  id: string;

  name: string;
  slug: string
  description?: string;
  icon?: string;
  sortOrder: number;
  active: boolean;

  delays?: FlyDelay[];

  createdAt: Date;
  updatedAt: Date;
}