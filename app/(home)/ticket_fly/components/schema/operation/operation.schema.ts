import { z } from "zod";

import { FlyOperationStatus } from "@/types/bookings/ticket-fly/enums";

import { FlyDelaySchema } from "./delay.schema";
import { FlyOperationTimelineSchema } from "./timeline.schema";

export const FlyOperationSchema = z.object({
  status: z.nativeEnum(FlyOperationStatus),

  departureTerminal: z.string().optional(),

  departureGate: z.string().optional(),

  arrivalTerminal: z.string().optional(),

  arrivalGate: z.string().optional(),

  baggageClaim: z.string().optional(),

  checkInCounter: z.string().optional(),

  boardingTime: z.date().optional(),

  boardingEndTime: z.date().optional(),

  gateOpenTime: z.date().optional(),

  gateCloseTime: z.date().optional(),

  actualDepartureTime: z.date().optional(),

  actualArrivalTime: z.date().optional(),

  estimatedDepartureTime: z.date().optional(),

  estimatedArrivalTime: z.date().optional(),

  timeline: z.array(FlyOperationTimelineSchema).optional(),

  delays: z.array(FlyDelaySchema).optional(),
});

export type FlyOperationFormValues = z.infer<typeof FlyOperationSchema>;
