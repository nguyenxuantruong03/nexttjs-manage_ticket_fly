import { FlyDelayReason } from "../fly-delay-reason";
import { FlyOperation } from "./operation.types";

export interface FlyDelay {
  id: string;

  operationId: string;
  operation?: FlyOperation;

  minutes: number;

  reasonId: string;
  reason?: FlyDelayReason;

  description?: string;

  createdAt: Date;
}
