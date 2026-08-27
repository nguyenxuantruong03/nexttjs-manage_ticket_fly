import { z } from "zod";

import { FlyWifiPackageSchema } from "./wifi.schema";
import { FlyAddonSchema } from "./addon.schema";
import { FlyInterlineSchema } from "./interline.schema";
import { FlyCodeshareSchema } from "./codeshare.schema";
import { FlyAirlineImageSchema } from "./image.schema";

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

  addon: z.array(FlyAddonSchema).optional(),
  interline: z.array(FlyInterlineSchema).optional(),
  operatingCodeshares: z.array(FlyCodeshareSchema).optional(),
  marketingCodeshares: z.array(FlyCodeshareSchema).optional(),
  wifiPackage: z.array(FlyWifiPackageSchema).optional(),
});

export type FlyAirlineFormSchema = z.infer<typeof FlyAirlineSchema>;
