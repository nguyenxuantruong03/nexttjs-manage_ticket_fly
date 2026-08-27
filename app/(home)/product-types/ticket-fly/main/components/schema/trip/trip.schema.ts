import { z } from "zod";

import { FlyInventorySchema } from "./inventory.schema";

import { FlyCrewAssignmentSchema } from "../../../../../references/airline/crew/main/components/schema/assignment.schema";

import { FlyCrewScheduleSchema } from "../../../../../references/airline/crew/main/components/schema/schedule.schema";

import { FlyOperationSchema } from "../operation/operation.schema";

import { FlyTrackingSchema } from "../operation/tracking.schema";

import { FlyCancellationSchema } from "../operation/cancellation.schema";

import { FlyDiversionSchema } from "../operation/diversion.schema";

import { FlyTripStatus } from "@/types/product-types/ticket-fly/enums";
import { FlyCodeshareSchema } from "@/app/(home)/product-types/references/airline/main/components/schema/codeshare.schema";
import { FlyConnectionSchema } from "@/app/(home)/product-types/ticket-fly/main/components/schema/trip/connection.schema";
import { FlyItinerarySegmentSchema } from "@/app/(home)/product-types/ticket-fly/main/components/schema/trip/itinerary.schema";

// ======================================================
// TRIP
// ======================================================

export const FlyTripSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  aircraftId: z.string().optional(),

  scheduleId: z.string().optional(),

  // ======================================================
  // BASIC
  // ======================================================

  flightNumber: z.string(),

  departureTime: z.date(),

  arrivalTime: z.date(),

  durationMinutes: z.number(),

  status: z.nativeEnum(FlyTripStatus),

  availableSeats: z.number().optional(),

  // ======================================================
  // INVENTORY
  // ======================================================

  inventory: FlyInventorySchema.optional(),

  // ======================================================
  // OPERATION
  // ======================================================

  operation: FlyOperationSchema.optional(),

  tracking: z.array(FlyTrackingSchema).optional(),

  cancellation: FlyCancellationSchema.optional(),

  diversion: FlyDiversionSchema.optional(),

  // ======================================================
  // CODESHARE
  // ======================================================

  codeshares: z.array(FlyCodeshareSchema).optional(),

  // ======================================================
  // CONNECTIONS
  // ======================================================

  firstConnections: z.array(FlyConnectionSchema).optional(),

  secondConnections: z.array(FlyConnectionSchema).optional(),

  // ======================================================
  // CREW
  // ======================================================

  crewSchedule: z.array(FlyCrewScheduleSchema).optional(),

  crewAssignment: z.array(FlyCrewAssignmentSchema).optional(),

  // ======================================================
  // ITINERARY
  // ======================================================

  itinerarySegment: z.array(FlyItinerarySegmentSchema).optional(),
});

export type FlyTripFormValues = z.infer<typeof FlyTripSchema>;
