import { FlyDelayReason } from "../enums";
import { FlyOperation } from "./operation.types";


export interface FlyDelay {
  id: string;

  operationId: string;

  operation?: FlyOperation;

  minutes: number;

  reason: FlyDelayReason;

  description?: string;

  createdAt: Date;
}
