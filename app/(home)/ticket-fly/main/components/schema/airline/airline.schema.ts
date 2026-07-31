import { z } from "zod";

import { FlyAirlineImageSchema } from "./image.schema";
import { FlyWifiPackageSchema } from "./wifi.schema";
import { FlyAddonSchema } from "./addon.schema";

export const FlyAirlineSchema = z.object({
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

  active: z.boolean(),

  images: z.array(FlyAirlineImageSchema).optional(),

  addon: z.array(FlyAddonSchema).optional(),

  wifiPackage: z.array(FlyWifiPackageSchema).optional(),
});

export type FlyAirlineFormValues = z.infer<typeof FlyAirlineSchema>;
