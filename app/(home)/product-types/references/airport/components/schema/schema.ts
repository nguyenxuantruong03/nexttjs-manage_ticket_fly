import { z } from "zod";
import { FlyMinimumConnectionTimeSchema } from "./minimum-connection.schema";
import { FlyDiversionSchema } from "@/app/(home)/product-types/ticket-fly/main/components/form/schema/operation/diversion.schema";

// ======================================================
// AIRPORT
// ======================================================

export const FlyAirportSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  code: z.string().min(1),

  iataCode: z.string().min(1),

  icaoCode: z.string().optional(),

  // ======================================================
  // CAPACITY
  // ======================================================

  terminalCount: z.number().optional(),

  // ======================================================
  // LOCATION
  // ======================================================

  lat: z.number().optional(),

  lng: z.number().optional(),

  addressId: z.string().optional(),

  // ======================================================
  // OPERATIONS
  // ======================================================

  diversions: z.array(FlyDiversionSchema).optional(),

  // ======================================================
  // CONNECTION
  // ======================================================

  minimumConnectionTime: z.array(FlyMinimumConnectionTimeSchema).optional(),
});

export type FlyAirportFormSchema = z.infer<typeof FlyAirportSchema>;
