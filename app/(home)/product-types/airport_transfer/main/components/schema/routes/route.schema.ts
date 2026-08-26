import { z } from "zod";

import { AirportTransferRoutePriceSchema } from "../pricing/route-price.schema";

import { AirportTransferTripSchema } from "../trip/trip.schema";

import { AirportTransferRouteStopSchema } from "./route-stop.schema";

export const AirportTransferRouteSchema = z.object({
  // ======================================================
  // ROUTE INFO
  // ======================================================

  routeTypeId: z.string().min(1),

  prices: z.array(z.lazy(() => AirportTransferRoutePriceSchema)).default([]),

  // ======================================================
  // ADDRESS
  // ======================================================

  departureAddressId: z.string().min(1),

  arrivalAddressId: z.string().min(1),

  // ======================================================
  // DISTANCE
  // ======================================================

  distanceKm: z.number().nullable(),

  estimatedDuration: z.number().nullable(),

  // ======================================================
  // RELATIONS
  // ======================================================
  trips: z.array(AirportTransferTripSchema),

  stops: z.array(z.lazy(() => AirportTransferRouteStopSchema)).default([]),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: z.string(),

  updatedAt: z.string(),
});

export type AirportTransferRouteSchema = z.infer<
  typeof AirportTransferRouteSchema
>;
