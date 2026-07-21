// trip.schema.ts

import { z } from "zod";

import { FlyTripStatus } from "@/types/bookings/ticket-fly/enums";

import { FlyInventorySchema } from "./inventory.schema";

import { FlyOperationSchema } from "../operation/operation.schema";

import { FlyTrackingSchema } from "../operation/tracking.schema";

import { FlyCancellationSchema } from "../operation/cancellation.schema";

import { FlyDiversionSchema } from "../operation/diversion.schema";

import { FlyCodeshareSchema } from "../alliance/codeshare.schema";

import { FlyConnectionSchema } from "../alliance/connection.schema";

import { FlyTripHistorySchema } from "../operation/history.schema";

export const FlyTripSchema = z.object({
  routeId: z.string(),

  flightNumber: z.string(),

  departureTime: z.date(),

  arrivalTime: z.date(),

  durationMinutes: z.number(),

  status: z.nativeEnum(FlyTripStatus),

  aircraftId: z.string().optional(),

  scheduleId: z.string().optional(),

  availableSeats: z.number().optional(),

  inventory: FlyInventorySchema.optional(),

  operation: FlyOperationSchema.optional(),

  tracking: z.array(FlyTrackingSchema).optional(),

  cancellation: FlyCancellationSchema.optional(),

  diversion: FlyDiversionSchema.optional(),

  codeshares: z.array(FlyCodeshareSchema).optional(),

  connections: z.array(FlyConnectionSchema).optional(),

  history: z.array(FlyTripHistorySchema).optional(),
});

export type FlyTripFormValues = z.infer<typeof FlyTripSchema>;
