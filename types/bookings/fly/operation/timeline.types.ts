import { FlyTimelineType } from "../enums";
import { FlyOperation } from "./operation.types";

export interface FlyOperationTimeline {
  id: string;

  operationId: string;

  operation?: FlyOperation;

  type: FlyTimelineType;

  eventTime: Date;

  note?: string;
}