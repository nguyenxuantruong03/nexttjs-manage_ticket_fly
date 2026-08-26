import { z } from "zod";

import { FlyAirlineImageSchema } from "./image.schema";
import { FlyWifiPackageSchema } from "./wifi.schema";

import { FlyAllianceMemberSchema } from "../alliance/alliance.schema";
import { FlyCodeshareSchema } from "../alliance/codeshare.schema";
import { FlyCrewSchema } from "../crew/crew.schema";
import { FlyInterlineSchema } from "../alliance/interline.schema";
import { FlyAddonSchema } from "./addon.schema";
import { FlyAircraftSchema } from "../aircraft/aircraft.schema";
import { FlyOverbookingRuleSchema } from "../trip/overbooking.schema";
import { FlyMealSchema } from "../fly-meal.schema";

export const FlyAirlineRatingSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  airlineId: z.string().min(1),

  userId: z.string().min(1),

  // ======================================================
  // RATING
  // ======================================================

  overall: z.number().min(0).max(5).optional(),

  service: z.number().min(0).max(5).optional(),

  comfort: z.number().min(0).max(5).optional(),

  food: z.number().min(0).max(5).optional(),

  entertainment: z.number().min(0).max(5).optional(),

  punctuality: z.number().min(0).max(5).optional(),
});

export const FlyAirlineSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  legalName: z.string().optional(),

  iataCode: z.string().optional(),

  icaoCode: z.string().optional(),

  callsign: z.string().optional(),

  country: z.string().optional(),

  website: z.string().url().optional(),

  hotline: z.string().optional(),

  email: z.string().email().optional(),

  logo: z.string().optional(),

  banner: z.string().optional(),

  description: z.string().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  // ======================================================
  // RELATIONS
  // ======================================================

  images: z.array(FlyAirlineImageSchema).optional(),

  rating: z.array(FlyAirlineRatingSchema).optional(),

  alliances: z.array(FlyAllianceMemberSchema).optional(),

  marketingCodeshares: z.array(FlyCodeshareSchema).optional(),

  crew: z.array(FlyCrewSchema).optional(),

  operatingCodeshares: z.array(FlyCodeshareSchema).optional(),

  meal: z.array(FlyMealSchema).optional(),

  interline: z.array(FlyInterlineSchema).optional(),

  addon: z.array(FlyAddonSchema).optional(),

  wifiPackage: z.array(FlyWifiPackageSchema).optional(),

  aircraft: z.array(FlyAircraftSchema).optional(),

  overbookingRule: z.array(FlyOverbookingRuleSchema).optional(),

});

export type FlyAirlineFormValues = z.infer<typeof FlyAirlineSchema>;

export type FlyAirlineRatingFormValues = z.infer<typeof FlyAirlineRatingSchema>;
