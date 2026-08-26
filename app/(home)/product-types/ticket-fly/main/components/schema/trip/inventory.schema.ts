import { z } from "zod";

import { FlyCrewAssignmentSchema } from "../crew/assignment.schema";


export const FlyInventoryFareSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  cabinInventoryId: z.string(),

  fareId: z.string(),


  // ======================================================
  // INVENTORY
  // ======================================================

  available: z.number(),

  sold: z.number(),

  hold: z.number(),

  waitlist: z.number(),
});

export const FlyCabinInventorySchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  inventoryId: z.string(),

  cabinClassId: z.string(),

  // ======================================================
  // CAPACITY
  // ======================================================

  totalSeats: z.number(),

  availableSeats: z.number(),

  reservedSeats: z.number(),

  blockedSeats: z.number(),

  overbookLimit: z.number().optional(),

  waitlistSeats: z.number().optional(),

  // ======================================================
  // FARES
  // ======================================================

  fares: z.array(FlyInventoryFareSchema).optional(),
});

export const FlyInventorySchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  tripId: z.string(),

  // ======================================================
  // CREW
  // ======================================================

  crewAssignments: z.array(FlyCrewAssignmentSchema).optional(),

  // ======================================================
  // CABINS
  // ======================================================

  cabins: z.array(FlyCabinInventorySchema).optional(),
});

export type FlyInventoryFareFormValues = z.infer<typeof FlyInventoryFareSchema>;

export type FlyCabinInventoryFormValues = z.infer<
  typeof FlyCabinInventorySchema
>;

export type FlyInventoryFormValues = z.infer<typeof FlyInventorySchema>;
